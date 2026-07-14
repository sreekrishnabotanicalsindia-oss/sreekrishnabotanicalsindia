const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = path.join(__dirname, 'public/images/products');

async function processDirectory(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        await processDirectory(fullPath); // Recursively process subdirectories
      } else if (file.match(/\.(png|jpe?g)$/i)) {
        console.log(`Compressing: ${fullPath}`);
        const tempPath = fullPath + '.tmp';
        
        try {
          if (file.toLowerCase().endsWith('.png')) {
            await sharp(fullPath)
              .png({ quality: 80, compressionLevel: 9 })
              .toFile(tempPath);
          } else {
            await sharp(fullPath)
              .jpeg({ quality: 80 })
              .toFile(tempPath);
          }
          
          fs.renameSync(tempPath, fullPath);
          console.log(`Successfully compressed ${file}`);
        } catch (err) {
          console.error(`Error compressing ${file}:`, err);
          if (fs.existsSync(tempPath)) {
            fs.unlinkSync(tempPath);
          }
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
  }
}

console.log('Starting image compression...');
processDirectory(directoryPath).then(() => {
  console.log('Finished compressing images.');
});
