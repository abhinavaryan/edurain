const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

function getFallbackAlt(src) {
    if (!src) return "EduRain Image";
    let name = src.split('/').pop().split('.')[0];
    name = name.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    if (src.includes('icons8') || src.includes('icon')) return "Icon";
    if (src.includes('logo')) return "EduRain Logo";
    return name || "EduRain Image";
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === 'dist' || file === '.git') continue;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            const $ = cheerio.load(content, { decodeEntities: false });
            let modified = false;
            
            $('img').each((i, el) => {
                const $img = $(el);
                const alt = $img.attr('alt');
                const src = $img.attr('src');
                const isFaculty = $img.closest('.faculty-card').length > 0 || $img.closest('.er-faculty-card').length > 0;
                const isStudent = $img.closest('.result-card').length > 0 || $img.hasClass('student-photo');
                
                // If it's a faculty card, try to get specific text
                if (isFaculty) {
                    const card = $img.closest('.faculty-card, .er-faculty-card');
                    const name = card.find('.faculty-name, .er-faculty-name').text().trim();
                    const subject = card.find('.faculty-subject, .er-faculty-subject').text().trim();
                    const exp = card.find('.faculty-exp, .er-faculty-badge').text().trim();
                    
                    if (name) {
                        const newAlt = `${name} - ${subject} Specialist, ${exp}`.replace(/\s+/g, ' ');
                        if (alt !== newAlt) {
                            $img.attr('alt', newAlt);
                            modified = true;
                        }
                        return; // Done with this image
                    }
                }
                
                // If it's a student card
                if (isStudent) {
                    const card = $img.closest('.result-card');
                    const name = card.find('.student-name').text().trim();
                    const rank = card.find('.student-rank').text().trim();
                    if (name) {
                        const newAlt = `Successful Student: ${name} ${rank}`.trim();
                        if (alt !== newAlt) {
                            $img.attr('alt', newAlt);
                            modified = true;
                        }
                        return;
                    }
                }
                
                // For other images, if alt is missing, empty, or generic like "Faculty" or "Image"
                if (!alt || alt.trim() === '' || alt.toLowerCase() === 'faculty' || alt.toLowerCase() === 'image' || alt.toLowerCase() === 'photo') {
                    $img.attr('alt', getFallbackAlt(src));
                    modified = true;
                }
            });
            
            if (modified) {
                // Cheerio might add <html><head><body> tags if they were missing, but these files are full HTML documents.
                fs.writeFileSync(fullPath, $.html(), 'utf8');
                console.log(`Updated HTML alts in ${file}`);
            }
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            // For JS files, use regex since Cheerio is for HTML
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            const imgRegex = /<img\s+([^>]+)>/g;
            content = content.replace(imgRegex, (match, attrs) => {
                const altMatch = attrs.match(/alt=["']([^"']+)["']/);
                const hasEmptyAlt = attrs.match(/alt=["']\s*["']/);
                const srcMatch = attrs.match(/src=["']([^"']+)["']/);
                const src = srcMatch ? srcMatch[1] : '';
                
                if (altMatch && !hasEmptyAlt && altMatch[1].trim() !== '') {
                    return match;
                }

                let newAlt = getFallbackAlt(src);
                if (altMatch || hasEmptyAlt) {
                    let newAttrs = attrs.replace(/alt=["'][^"']*["']/, `alt="${newAlt}"`);
                    return `<img ${newAttrs}>`;
                } else {
                    return `<img alt="${newAlt}" ${attrs}>`;
                }
            });

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated JS alts in ${file}`);
            }
        }
    }
}

processDirectory(__dirname);
console.log("Done updating alt tags.");
