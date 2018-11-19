const config = require("../noteDB/knexfile").development

const knex = require("knex")(config)

class NoteService {
    constructor(filename) {
        this.filename = filename;
        this.notes = [];
    }

    async listNote(user) {
        const query = await knex("users").join("msg", "users.id", "=", "msg.user_id").select("users.username", "msg.msg").where("users.username", `${user}`);
        const message = await (function () {
            let arr = [];
            for (let element of query) {
                arr.push(element.msg)
            }
            return arr
        })();
        return message
    }

    async addNote(note, user) {
        const newNote = Object.values(note)[0];
        const userIDarr = await knex.select("id").from("users").where("username", `${user}`);
        let userID = Object.values(userIDarr[0])[0];
        const getLength = await knex.select().from("msg")
        const realID = getLength.length + 1
        const insert = await knex("msg").insert({ id: realID, user_id: `${userID}`, msg: `${newNote}` });
    }

    async updateNote(json, user) {
        let jsonIndex = json["index"]
        let jsonContext = json["context"]
        const userIDarr = await knex.select("id").from("users").where("username", `${user}`);
        let userID = Object.values(userIDarr[0])[0];
        const select = await knex.select("msg", "id").from("msg").where("user_id", `${userID}`)
        let getMsgID = select[jsonIndex].id
        const update = await knex("msg").where("id", `${getMsgID}`).update({ msg: `${jsonContext}` })
    }

    async deleteNote(json, user) {
        let jsonContext = json["context"]
        const del = await knex("msg").where("msg", `${jsonContext}`).del()
    }

}

module.exports = NoteService;




