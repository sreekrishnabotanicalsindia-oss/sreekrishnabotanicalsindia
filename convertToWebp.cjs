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
        await processDirectory(fullPath);
      } else if (file.match(/\.(png|jpe?g)$/i)) {
        console.log('Compressing to WebP:', fullPath);
        const webpPath = fullPath.replace(/\.(png|jpe?g)$/i, '.webp');
        
        try {
          // Resize to max 800px width for fast loading, compress to WebP
          await sharp(fullPath)
            .resize(800, null, { withoutEnlargement: true })
            .webp({ quality: 70 })
            .toFile(webpPath);
          
          console.log('Successfully created', webpPath);
          
          // Delete old png/jpg to save space
          if (fullPath !== webpPath) {
             fs.unlinkSync(fullPath);
          }
        } catch (err) {
          console.error('Error compressing', file, err);
        }
      }
    }
  } catch (err) {
    console.error('Error reading directory', dir, err);
  }
}

console.log('Starting image compression to WebP...');
processDirectory(directoryPath).then(() => {
  console.log('Finished compressing images to WebP.');
});
