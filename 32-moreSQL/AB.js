const pg = require("pg");

const config = {
    user: "day32",
    database: "fruitAndStock",
    password: "day32",
    host: "localhost",
    port: 5432,
    max: 10,
    idleTimeoutMills: 30000
}

let client = new pg.Client(config);

client.connect();






// client.query("INSERT INTO citrus (name, color, taste) VALUES ('lemon', 'yellow', 'sour');INSERT INTO citrus (name, color, taste) VALUES ('orange', 'orange', 'juicy');INSERT INTO citrus (name, color, taste) VALUES ('grapefruit', 'orange', 'bitter');INSERT INTO citrus (name, color, taste) VALUES ('lime', 'green', 'sour');INSERT INTO citrus (name, color, taste) VALUES ('tangerine', 'yellow', 'sweet');", (err, results)=>{
//     if (err){
//         console.log (err)
//     }
    
//         console.log (results.rows)
    
// })

// client.query("CREATE TABLE stock (id SERIAL primary key,fruit_name VARCHAR(255) not null,text_length integer,quantity integer,price decimal);", (err, results)=>{
//     if (err){
//         console.log (err)
//     }
    
//         console.log (results.rows)
    
// })

let fruitName = ["lemon", "orange", "grapefruit", "lime", "tangerine"];
let textLength = [5,5,5,5,5];
let quantity = [1,2,3,4,5];
let price = [10,20,30,40,50];

for (let i=0; i<5; i++){
    client.query(`INSERT INTO stock (fruit_name, text_length, quantity, price) VALUES ('${fruitName[i]}', ${textLength[i]}, ${quantity[i]}, ${price[i]})`, (err, results)=>{
        if (err){
            console.log (err)
        }
        console.log (results.rows);
    })
}
