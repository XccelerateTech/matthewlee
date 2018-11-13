const fs = require('fs');
const CsvReadableStream = require('csv-reader');
const pg = require('pg');

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

const inputStream = fs.createReadStream('transaction_record.csv', 'utf8');

inputStream
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        if (row[0] == "SELL") {
            client.query(`SELECT * FROM stock WHERE quantity > ${row[2]} AND fruit_name = '${row[1]}'`, (err, results) => {
                if (err) {
                    console.log(err)
                } 
                if (results.rows.length > 0){
                    client.query(`UPDATE stock SET quantity = quantity - ${row[2]} WHERE fruit_name = '${row[1]}';`, (err, results) => {
                        if (err) {
                            console.log(err)
                        }
                        console.log(results.rows)
                    })
                } else {
                    console.log (`insufficient ${row[1]}`)
                }
            })
        } else {
            client.query(`UPDATE stock SET quantity = quantity + ${row[2]} WHERE fruit_name = '${row[1]}';`, (err, results) => {
                if (err) {
                    console.log(err)
                }
                console.log(results.rows)
            })
        }
    })
    .on('end', function () {
        client.query("SELECT * FROM stock;", (err, results) => {
            if (err) {
                console.log(err)
            }
            console.log(results.rows)
        })
    });



