'use strict'

var mysql = require('mysql')
var conf = require('./db-conf.json')
var dbOptions = {
    host : conf.mysql.host,
    port : conf.mysql.port,
    user : conf.mysql.user,
    password : conf.mysql.pass,
    database : conf.mysql.db
}
var myConn = mysql.createConnection(dbOptions) 

myConn.connect( (err)=> {
    return (err) ? console.log(`Error al conectarse al MySQL: ${err.stack}`) : console.log(`Conexion establecida con MySQL No: ${myConn.threadId}`)
} )
 

module.exports = myConn