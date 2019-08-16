'use strict'

var MovieModel = require('../models/movie-model.js')
var MovieController = () => {}

MovieController.getAll = (req, res, next) => {
    MovieModel.getAll((err, rows) => {
        if(err){
			 next( new Error('No hay regitros de Películas') )
        } 
        else 
        {
			 let locals = {
				 title : 'Lista de Películas',
				 data : rows
             }
             
			 res.render('index', locals)
		}
    })
}

MovieController.insert = (req, res, next) => {
    let movie = {
        movie_id : req.body.movie_id,
        title : req.body.title,
        release_year : req.body.release_year,
        rating : req.body.rating,
        image : req.body.image
    }

    console.log(movie)

    MovieModel.insert(movie, (err) => {
        if(err){
            next( new Error('Error al Agregar el Registro') )
        } 
        else 
        {           
            res.redirect('/')
        }
    })
}


MovieController.getOne = (req, res, next) => {
    let movie_id = req.params.movie_id
    console.log(movie_id)

    MovieModel.getOne(movie_id,(err,rows) => {
        console.log(err, '----', rows)
        if(err){
            next( new Error('Registro No encontrado') )
        } else {
            let locals = {
                title : 'Editar Pelicula',
                data : rows
            }

            res.render('edit-movie', locals)
        }
    })
}

MovieController.update = (req, res, next) => {
    let movie = {
        movie_id : req.body.movie_id,
        title : req.body.title,
        release_year : req.body.release_year,
        rating : req.body.rating,
        image : req.body.image
    }

    console.log(movie)

    MovieModel.update(movie, (err) => {
        if(err){
            next( new Error('Error No fue posible actualizar el registro') )
        } 
        else 
        {           
            res.redirect('/')
        }
    })
}

MovieController.delete = (req, res, next) => {
    let movie_id = req.params.movie_id
    console.log(movie_id)

    MovieModel.delete(movie_id,(err,rows) => {
        console.log(err, '----', rows)
        if(err){
            next( new Error('Registro No encontrado') )
        } else {
            res.redirect('/')
        }
    })
}

MovieController.addForm = (req, res, next) => {
    res.render('add-movie',{ title : 'Agregar Pelicula' })
}

MovieController.error404 = (req, res, next) => {
    let error = new Error()
    let locals = {
        title : 'Error 404',
        description: 'Recurso no encontrado',
        error : error.message

    }

    error.status = 404

    res.render('error',locals)

    next() 
}

module.exports = MovieController