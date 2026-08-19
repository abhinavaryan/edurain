const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');

function fixImages(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixImages(fullPath);
        } else if (fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Replace "./images/" with "/images/"
            content = content.replace(/"\.\/images\//g, '"/images/');
            content = content.replace(/'\.\/images\//g, "'/images/");
            // Some might just be "images/"
            content = content.replace(/"images\//g, '"/images/');
            content = content.replace(/'images\//g, "'/images/");
            // Be careful not to replace "//images/" if it already happened
            content = content.replace(/"\/\/images\//g, '"/images/');
            content = content.replace(/'\/\/images\//g, "'/images/");

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Fixed images in: ' + file);
            }
        }
    }
}

fixImages(componentsDir);
