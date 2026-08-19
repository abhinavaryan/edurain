const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/images/student result detail');
const outputDir = inputDir;

const files = ['foundation.png', 'jee.png', 'neet.png'];

async function processImages() {
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace('.png', '_avatar.png'));
        
        if (fs.existsSync(inputPath)) {
            try {
                await sharp(inputPath)
                    .resize({
                        width: 250,
                        height: 250,
                        fit: sharp.fit.cover,
                        position: sharp.strategy.attention
                    })
                    .toFile(outputPath);
                console.log(`Successfully cropped ${file}`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        } else {
            console.log(`File not found: ${inputPath}`);
        }
    }
}

processImages();
