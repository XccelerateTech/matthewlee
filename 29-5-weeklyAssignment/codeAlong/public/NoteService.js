const fs = require("fs")

class NoteService {
    constructor(filename) {
        this.filename = filename;
        this.notes = [];
        // this.listNotePromise = this.listNote();
    }

    listNote(user) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filename, "utf-8", (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }   
                this.notes = JSON.parse(data);
                resolve(this.notes[`${user}`])
            })
        })
    }
    addNote(note, user) {
        return new Promise((resolve, reject) => {
            this.listNote(user)
            //after listNote this.notes contains the whole json
                .then(() => {
                    this.notes[`${user}`].push(Object.values(note)[0])
                })
                .then(()=>[
                    fs.writeFile(this.filename, JSON.stringify(this.notes), (err) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        // console.log (`data is ${data}`);
                        console.log (`this.notes.user is ${this.notes[`${user}`]}`)
                        console.log ("writeFile success")
                        resolve();
                    })
                ])
                .catch(()=>{
                    console.log("addnote error handler")
                })
        })
    }
            

                
            
    updateNote(json, user) {
        return new Promise((resolve, reject)=>{
            let jsonIndex = json["index"]
            let jsonContext = json["context"]
            this.listNote(user)
            .then(()=>{
                this.notes[`${user}`].splice(jsonIndex, 1, `${jsonContext}`)
            })
            .then(()=>[
                fs.writeFile(this.filename, JSON.stringify(this.notes), (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    console.log (`this.notes.user is ${this.notes[`${user}`]}`)
                    console.log ("delFile success")
                    resolve();
                })
            ])
            .catch(()=>{
                console.log("update error handler")
                reject();
            })
        })
    }
    deleteNote(json, user) {
        return new Promise((resolve, reject)=>{
            let jsonIndex = json["index"]
            this.listNote(user)
            .then(()=>{
                this.notes[`${user}`].splice(jsonIndex, 1)
            })
            .then(()=>[
                fs.writeFile(this.filename, JSON.stringify(this.notes), (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    // console.log (`data is ${data}`);
                    console.log (`this.notes.user is ${this.notes[`${user}`]}`)
                    console.log ("updateFile success")
                    resolve();
                })
            ])
            .catch(()=>{
                console.log("update error handler")
                reject();
            })
        })
    }
}

module.exports = NoteService;




                    