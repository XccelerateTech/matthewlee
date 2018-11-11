const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");
const router = require("./router/noteRouter")
const hbs = require("express-handlebars")
// const port = process.env.PORT;
const path = require("path")
const cors = require("cors")
// const axios = require("axios")
// const basicAuth = require("./users/user")

const app = express();



let currentUser = [];

//view engine setup
app.engine("handlebars", hbs({ extname: "handlebars", defaultLayout: "main", layoutsDir: `${__dirname}/views/layouts` }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

//tools
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//basicAuth
const USERS = [
    { username: "fk", password: "off" },
    { username: "gd", password: "boy" },
    { username: "bad", password: "gal" }
]

//req header for your ref : Authorization: Basic Zms6b2Zm  <== encoded from fk off
app.use(basicAuth({
    authorizer: function (ac, pw) {
        return USERS.some((user) => {
            return user.username === ac && user.password === pw;
        })
    },
    challenge: true,
    realm: "myNote"
}))

app.use("/", router)

app.listen(8080, () => {
    console.log(`you are on ${8080}`)
});