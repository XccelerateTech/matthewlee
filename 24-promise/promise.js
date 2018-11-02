const fs = require('fs');
const path = require('path');

function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(`${__dirname}/${path}`, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

module.exports.readdir = readdir;

function checkFile(paths) {
    return new Promise((resolve, reject) => {
        fs.stat(paths, (err, stats)=>{
            if (err){
                console.log ("error")
            } else {
                if (stats.isDirectory()){
                    reject()
                } else if (stats.isFile()){
                    resolve();
                    console.log (`${paths} is a file`)
                }
            }
        })
    });
}

module.exports.checkFile = checkFile;