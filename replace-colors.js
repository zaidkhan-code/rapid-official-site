import * as fs from 'fs';
import * as path from 'path';

const dir = './src';

const colorMap = {
  '[#060D1A]': 'base-dark',
  '[#040914]': 'base-darker',
  '[#050C1A]': 'base-darker',
  '[#0A101C]': 'surface-dark',
  '[#0B1120]': 'surface-light',
  '[#0B1221]': 'surface-light',
  '[#0F1420]': 'surface-lighter',
  '[#0F172A]': 'surface-lighter',
  '[#080D1A]': 'base-dark',
  '[#030812]': 'base-darker',
  '[#111A2D]': 'surface-lighter',
  '[#1A2234]': 'surface-lighter',
  '[#111624]': 'surface-light',
  '[#111827]': 'surface-light',
};

function processDir(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let changed = false;
      
      for (const [hexRegex, globalVar] of Object.entries(colorMap)) {
        const hex = hexRegex.substring(2, 8); // e.g. 060D1A
        
        const replacePairs = [
          [`bg-[#${hex}]`, `bg-${globalVar}`],
          [`text-[#${hex}]`, `text-${globalVar}`],
          [`border-[#${hex}]`, `border-${globalVar}`],
          [`bg-[#${hex.toLowerCase()}]`, `bg-${globalVar}`],
          [`text-[#${hex.toLowerCase()}]`, `text-${globalVar}`],
          [`border-[#${hex.toLowerCase()}]`, `border-${globalVar}`]
        ];

        const original = content;
        for (const [search, replace] of replacePairs) {
          content = content.split(search).join(replace);
        }
        
        if (original !== content) {
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(dir);
