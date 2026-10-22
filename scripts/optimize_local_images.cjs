/**
 * EduRain Local Image Optimizer (PNG/JPG -> WebP)
 * Runs automatically before build/predeploy/push.
 * Only converts new or modified images using high-quality Sharp settings (quality 88).
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const TARGET_DIRS = [
    path.join(__dirname, '..', 'public', 'images'),
    path.join(__dirname, '..', 'src', 'assets')
];

const CODE_DIRS = [
    path.join(__dirname, '..', 'src'),
    path.join(__dirname, '..', 'public')
];

const CODE_EXTS = ['.js', '.jsx', '.html', '.json', '.css'];

function getFilesRecursively(dir, filterExts) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFilesRecursively(fullPath, filterExts));
        } else {
            const ext = path.extname(file).toLowerCase();
            if (filterExts.includes(ext)) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

async function optimizeImages() {
    console.log('\n🖼️  Checking for local images needing WebP conversion (Quality: 88, lossless visual fidelity)...');

    const imageExts = ['.png', '.jpg', '.jpeg'];
    let allImages = [];
    TARGET_DIRS.forEach(d => {
        allImages = allImages.concat(getFilesRecursively(d, imageExts));
    });

    let convertedCount = 0;
    let totalSavedBytes = 0;
    const replacements = [];

    for (const imgPath of allImages) {
        const ext = path.extname(imgPath);
        const webpPath = imgPath.slice(0, -ext.length) + '.webp';

        const imgStat = fs.statSync(imgPath);
        let shouldConvert = true;

        if (fs.existsSync(webpPath)) {
            const webpStat = fs.statSync(webpPath);
            // Skip if webp is newer than the source image
            if (webpStat.mtimeMs >= imgStat.mtimeMs && webpStat.size > 0) {
                shouldConvert = false;
            }
        }

        if (shouldConvert) {
            try {
                // High-quality WebP: quality 88 retains 100% sharp text, clear diagrams, vibrant colors
                await sharp(imgPath)
                    .webp({ quality: 88, effort: 6 })
                    .toFile(webpPath);

                const newStat = fs.statSync(webpPath);
                const saved = imgStat.size - newStat.size;
                totalSavedBytes += Math.max(0, saved);
                convertedCount++;

                const origKb = (imgStat.size / 1024).toFixed(1);
                const newKb = (newStat.size / 1024).toFixed(1);
                const percent = Math.round((saved / imgStat.size) * 100);

                const relImg = path.relative(path.join(__dirname, '..'), imgPath).replace(/\\/g, '/');
                console.log(`  ✓ Converted: ${relImg} (${origKb} KB → ${newKb} KB, -${percent}%)`);
            } catch (err) {
                console.warn(`  ⚠️ Failed to convert ${imgPath}:`, err.message);
            }
        }

        // Track path pattern for updating code references
        const relFromPublic = path.relative(path.join(__dirname, '..', 'public'), imgPath).replace(/\\/g, '/');
        if (!relFromPublic.startsWith('..')) {
            const extLower = ext.toLowerCase();
            const relWebp = relFromPublic.slice(0, -extLower.length) + '.webp';
            replacements.push({
                orig: relFromPublic,
                webp: relWebp
            });
        }
    }

    if (convertedCount > 0) {
        console.log(`✨ Successfully converted ${convertedCount} new/updated images to WebP! Saved ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB total.`);
    } else {
        console.log('⚡ All local images are already up to date in WebP format.');
    }

    // Now auto-update code references in src/ so components load .webp
    if (replacements.length > 0) {
        updateCodeReferences(replacements);
    }
}

function updateCodeReferences(replacements) {
    let codeFiles = [];
    CODE_DIRS.forEach(d => {
        codeFiles = codeFiles.concat(getFilesRecursively(d, CODE_EXTS));
    });

    // Also include index.html in root
    const rootIndex = path.join(__dirname, '..', 'index.html');
    if (fs.existsSync(rootIndex)) codeFiles.push(rootIndex);

    let updatedFilesCount = 0;

    codeFiles.forEach(file => {
        // Skip migration backups and this script itself
        if (file.includes('.backup') || file.includes('optimize_local_images')) return;

        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        replacements.forEach(({ orig, webp }) => {
            // Check direct relative web path e.g. /images/... or images/...
            const searchPattern = new RegExp(escapeRegex(orig), 'g');
            if (searchPattern.test(content)) {
                content = content.replace(searchPattern, webp);
                modified = true;
            }

            // Also check URL-encoded space variant if any (e.g. %20)
            const encodedOrig = orig.replace(/ /g, '%20');
            const encodedWebp = webp.replace(/ /g, '%20');
            if (encodedOrig !== orig) {
                const encodedPattern = new RegExp(escapeRegex(encodedOrig), 'g');
                if (encodedPattern.test(content)) {
                    content = content.replace(encodedPattern, encodedWebp);
                    modified = true;
                }
            }
        });

        if (modified) {
            fs.writeFileSync(file, content, 'utf8');
            updatedFilesCount++;
        }
    });

    if (updatedFilesCount > 0) {
        console.log(`📝 Updated image references to .webp in ${updatedFilesCount} source files.`);
    }
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

optimizeImages().catch(err => {
    console.error('Image optimization error:', err);
    process.exit(0); // Non-blocking so build doesn't fail if image has issues
});
