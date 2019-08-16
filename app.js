'use strict'


// https://www.youtube.com/watch?v=C_Syf3k9ROg&list=PLvq-jIkSeTUY3gY-ptuqkNEXZHsNwlkND&index=51

// Configuración de la aplicación

var express = require('express')
var favicon = require('serve-favicon')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var restFull = require('express-method-override')('_method')
var routes = require('./routes/movie-router.js')
var jade = require('jade')

var faviconURL = __dirname + '/public/img/node-favicon.png'
var publicDir = express.static(`${__dirname}/public`)
var viewDir = `${__dirname}/views`
var port = (process.env.PORT || 3000)
var app = express()

// Configuración de la aplicación
app.set('views',viewDir)
app.set('view engine','jade')
app.set('port', port)

// Ejecutando Middleware
app.use(favicon(faviconURL))
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended: false}) )
app.use(restFull)
app.use( morgan('dev') )
app.use(publicDir)

//Ejecutando el Middleware donde esta la logica de las rutas
app.use(routes)

module.exports = app

