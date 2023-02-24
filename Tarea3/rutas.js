const express = require('express')
const path = require('path')

const app = express()

function mid(req, res, next){
    next()
}

function cargarHome(req, res){
    //res.send('cola')
    res.sendFile(path.join(__dirname, 'views', 'Index.html'))
}

function cargarHobbies(req, res){
    res.sendFile(path.join(__dirname, 'views', 'Hobbies.html'))
}

function cargarQuien(req, res){
    res.sendFile(path.join(__dirname, 'views', 'QuienSoy.html'))
}

function error(req, res){
    res.sendFile(path.join(__dirname, 'views', 'error.html'))
}
module.exports = function(app){
    app.get('/', mid, cargarHome)
    app.get('/home', mid, cargarHome)
    app.get('/hobbies', mid, cargarHobbies)
    app.get('/quiensoy', mid, cargarQuien)
    app.get('*', mid, error)


}