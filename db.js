const mysql = require('mysql')

function connect(){
    const connection = mysql.createConnection({
       //do not use localhost
        host:'192.168.225.84',
        user:'root',
        password:'manager',
        database:'myapp_db',
        port:9099
    })
 connection.connect()
 return connection
}
module.exports={
    connect:connect
}