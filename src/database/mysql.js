const mysql = require('mysql')
const { MYSQL_CONFIG } = require('./config')
var db;

function handleDisconnect() {
    db = mysql.createConnection(MYSQL_CONFIG); // Recreate the connection, since  
    // the old one cannot be reused.  

    db.connect(function(err) { // The server is either down  
        if (err) { // or restarting (takes a while sometimes).  
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,  
        } // to avoid a hot loop, and to allow our node script to  
    }); // process asynchronous requests in the meantime.  
    // If you're also serving http, display a 503 error.  
    db.on('error', function(err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually  
            handleDisconnect(); // lost due to either server restart, or a  
        } else { // connnection idle timeout (the wait_timeout  
            throw err; // server variable configures this)  
        }
    });
}
handleDisconnect()

function execSQL(sql) {
    const promise = new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result);
        })
    })
    return promise
}
module.exports = { execSQL };