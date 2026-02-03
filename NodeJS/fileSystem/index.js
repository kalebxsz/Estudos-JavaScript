// LISTANDO DIRETÓRIOS COM FS = FILE SYSTEM 

const fs = require('fs').promises;

const { stat } = require('fs');
const { flushCompileCache } = require('module');
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir); 
}

async function walk(files, rootDir){
    for(let file of files ){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
if (stats.isDirectory()){
    readdir(fileFullPath);
    continue;
}

        console.log(fileFullPath);
        
    }
}

readdir('/home/kaleb/downloads/Estudos-JavaScript/')