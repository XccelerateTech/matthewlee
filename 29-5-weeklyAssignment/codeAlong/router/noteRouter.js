const express = require("express");
const router = express.Router();
const NoteService = require("../public/NoteService");
const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());


let note = new NoteService("./store/notes.json")

let getUser = (req)=>{
    const base64code=  req.headers.authorization.split(' ')[1];
    const decode = Buffer.from(base64code, 'base64').toString('ascii');
    const [username, password] = decode.split(':');
    return username;
}

router.get("/", (req, res)=>{
    let user = getUser(req);
    note.listNote(user)
    .then((data)=>{
        res.render("index", ({name: `${user}`, jsonData: data}))
    })
    .catch(()=>{
        res.render("index", ({jsonData: `listnote error`}))
    })
})


//all below are PENDING, need go watch handlebars first
router.post("/", (req, res)=>{
    let user = getUser(req);
    note.addNote(req.body, user)
    .then(()=>{
        note.listNote(user)
        .then((data)=>{
            res.render("index", ({name: user, jsonData: data}))
        })
        .catch(()=>{
            res.render("index", ({jsonData: `listnote error`}))
        })
    })
    .catch(()=>{
        console.log ("post error")
    })
})

router.put("/", (req, res)=>{
    let user = getUser(req);
    note.updateNote(req.body, user)
    .then(()=>{
        note.listNote(user)
        .then((data)=>{
            console.log ("put at node level success")
            res.render("index", ({name: user, jsonData: data}))
        })
        .catch(()=>{
            res.render("index", ({jsonData: `listnote error`}))
        })
    })
    .catch(()=>{
        console.log ("put error")
    })
})

router.delete("/", (req, res)=>{
    let user = getUser(req);
    note.deleteNote(req.body, user)
    .then(()=>{
        note.listNote(user)
        .then((data)=>{
            res.render("index", ({name: user, jsonData: data}))
        })
        .catch(()=>{
            res.render("index", ({jsonData: `listnote error`}))
        })
    })
    .catch(()=>{
        console.log ("delete error")
    })
})

module.exports = router; 