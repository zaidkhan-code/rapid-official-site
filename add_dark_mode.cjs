const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory && f !== 'node_modules' ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

const mappings = {
    'bg-slate-50': 'bg-slate-50 dark:bg-[#061121]',
    'bg-slate-50/20': 'bg-slate-50/20 dark:bg-[#061121]/20',
    'bg-slate-50/40': 'bg-slate-50/40 dark:bg-[#061121]/40',
    'bg-slate-50/60': 'bg-slate-50/60 dark:bg-[#061121]/60',
    'bg-slate-50/80': 'bg-slate-50/80 dark:bg-[#061121]/80',
    'bg-white/95': 'bg-white/95 dark:bg-[#0A101C]/95',
    'bg-slate-100': 'bg-slate-100 dark:bg-[#060D1A]',
    'bg-slate-200': 'bg-slate-200 dark:bg-[#040914]',
    'bg-white': 'bg-white dark:bg-[#0A101C]',
    'text-slate-600': 'text-slate-600 dark:text-white/80',
    'text-slate-500': 'text-slate-500 dark:text-white/60',
    'text-slate-700': 'text-slate-700 dark:text-white/90',
    'text-slate-900': 'text-slate-900 dark:text-white',
    'text-slate-800': 'text-slate-800 dark:text-white/90',
    'border-slate-200': 'border-slate-200 dark:border-white/10',
    'border-slate-100': 'border-slate-100 dark:border-white/5',
    'border-slate-300': 'border-slate-300 dark:border-white/20',
    'shadow-slate-200': 'shadow-slate-200 dark:shadow-white/5'
};

walk('./src', (filePath) => {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.css')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    
    // To avoid replacing already replaced strings
    let newContent = content;
    
    for (const [light, darkMapped] of Object.entries(mappings)) {
        const escapedLight = light.replace(/\//g, '\\/');
        const regex = new RegExp(`\\b${escapedLight}\\b(?![\\s]*dark:)`, 'g');
        newContent = newContent.replace(regex, darkMapped);
    }

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Updated ${filePath}`);
    }
});
