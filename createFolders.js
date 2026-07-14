import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products } from './src/data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, 'public/images/products');

products.forEach(product => {
  let folderName = product.name;
  if (product.category === 'Oleoresins') {
    folderName += ' Oleoresin';
  } else if (product.category === 'Powders') {
    folderName += ' Powder';
  } else if (product.category === 'Whole Spices') {
    folderName += ' Whole';
  }
  
  folderName = folderName.replace(/[\/\\]/g, '-');
  
  const categoryDir = path.join(baseDir, product.category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
    console.log(`Created category folder: ${product.category}`);
  }

  const oldFolderPath = path.join(baseDir, folderName);
  const newFolderPath = path.join(categoryDir, folderName);

  if (fs.existsSync(oldFolderPath) && oldFolderPath !== newFolderPath) {
    fs.renameSync(oldFolderPath, newFolderPath);
    console.log(`Moved ${folderName} to ${product.category}/${folderName}`);
  } else if (!fs.existsSync(newFolderPath)) {
    fs.mkdirSync(newFolderPath, { recursive: true });
    console.log(`Created folder: ${product.category}/${folderName}`);
  }
});

console.log("All product folders organized by category successfully!");
