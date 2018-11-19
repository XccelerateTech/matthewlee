const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");
const router = require("./router/noteRouter")
const hbs = require("express-handlebars")
const path = require("path")
const cors = require("cors")
const config = require("./noteDB/knexfile").development
const knex = require("knex")(config)

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
const dbUsers = require("./user")

app.use(basicAuth({
    authorizer: dbUsers,
    authorizeAsync: true,
    challenge: true,
    realm: "myNote"
}))

app.use("/", router)

app.listen(8080, () => {
    console.log(`you are on ${8080}`)
});