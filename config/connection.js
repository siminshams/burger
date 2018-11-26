//Set up mysql connection
var mysql = require ("mysql");
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
    connection = mysql.createConnection({
        host:"localhost",
        port:3306,
        user:"root",
        password:"SHams1363$",
        database:"burger_db"
        });
}

//Make connection
connection.connect(function(err){
    if(err){
        console.log("error connecting" + err.stack);
    }else{
        console.log("connected as id " + connection.threadId);
    }
});
//Export connection for our ORM to use
module.exports = connection;