const fs = require("fs");
const path = require("path");
const promise = require("./promise");

let folderPath = `./files/`;

let loop = (folderPath)=>{
    promise.checkFile(folderPath)
    .catch(()=>{
        console.log(`${folderPath} is a dir`);
        promise.readdir(folderPath)
        .then((items)=>{
            for (let item of items){
                let newPath = path.join(folderPath, item);
                loop(newPath);
            }
        })
    })
}

loop(folderPath);


