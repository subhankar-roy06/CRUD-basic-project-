const mysql2 = require('mysql2');


const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "@Subho#3467",
    database: "customer",
    port:3306
})

connection.connect(function(err){
    if(err){
        console.log("error occurd while connecting");
    }else{
        console.log("connected to database");
    }
})