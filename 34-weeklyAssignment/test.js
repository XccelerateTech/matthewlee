const config = require("./noteDB/knexfile").development

const knex = require("knex")(config)



// async function test (){
//     const userIDarr = await knex.select("id").from("users").where("username", "fk");
//     let userID = Object.values(userIDarr[0])[0];
//     const select = await knex.select("msg", "id").from("msg").where("user_id", `${userID}`)
//     let getMsgID = select[1].id
//     const update = await knex("msg").where("id", `${getMsgID}`).update({msg: "i got updated"})
//     const selectAgain = await knex.select("msg", "id").from("msg").where("user_id", `${userID}`)
// }

// test()

async function add(){
    const userIDarr = await knex.select("id").from("users").where("username", `fk`);
    let userID = Object.values(userIDarr[0])[0];
    const getLength = await knex.select().from("msg")
    const realID = getLength.length + 1
    const insert = await knex("msg").insert({id:realID, user_id:`${userID}`, msg:`test`});
}