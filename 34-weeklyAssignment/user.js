const config = require("./noteDB/knexfile").development

const knex = require("knex")(config)

async function dbUsers(ac, pw, cb) {
    let USERS = [];
    let x = await knex.select().from("users")
    USERS = [...x]
    console.log(USERS)
    if (USERS.some((u) => {return u.username == ac && u.password == pw})) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = dbUsers;