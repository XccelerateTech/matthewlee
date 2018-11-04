const express = require("express");

//set multer
const multer = require("multer")
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
const upload = multer({storage:storage});

const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs")
const app = express();

//take tools (they called it middleware) to be used
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//just to get the index page
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
});

app.get("/uploads/:id", (req, res)=>{
    res.sendFile(`${__dirname}/uploads/${req.params.id}`);
})

app.get("/test.json", (req, res)=>{
    res.sendFile(path.join(`${__dirname}/test.json`))
})

app.post("/uploads", upload.single('fileToUpload'), (req, res) => {
    console.log(req.body);
	console.log(req.files);
    res.sendFile(path.join(`${__dirname}/public/uploads.html`))
    fs.readdir(`${__dirname}/uploads`, (err, items) => {
        fs.writeFile("./test.json", JSON.stringify(items), cb => {
            console.log (`success`)
        })
    })
})

app.listen(8080);