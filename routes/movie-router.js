'use strict'
 
var MovieController = require('../controlers/movie-controller.js')
var express = require('express')
var router = express.Router()
 
router	 
    .get('/', MovieController.getAll)
    .get('/agregar', MovieController.addForm) 
    .post('/',  MovieController.insert)
    .get('/editar/:movie_id',  MovieController.getOne)
    //.post('/actualizar/:movie_id',  MovieController.update)
    .put('/actualizar/:movie_id',  MovieController.update)//
    //.post('/eliminar/:movie_id',  MovieController.delete)
    .delete('/eliminar/:movie_id',  MovieController.delete)

/*router.use(peliculas)*/

router.use(MovieController.error404)


module.exports = router

/*

movies.query('SELECT * from movie', (err,rows)=>{
    let locals  = {
        title : 'Lista de Peliculas',
        data : rows
    }

    res.render('index.jade',locals)
})
*/