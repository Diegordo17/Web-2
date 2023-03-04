const express = require('express')
const path = require('path')
const axios = require('axios')

const filtro = 'tesla'

const app = express()

module.exports = function(app){

    

    app.get('/', function(req, res){
        res.render('search')
    })

    app.get('/home', function(req, res){
        res.send('lista')
    })

    app.get('/search', function(req, res){
        //console.log(req.query.q)
        axios.get(`https://newsapi.org/v2/everything?q=${req.query.q}&from=2023-03-02&sortBy=publishedAt&apiKey=8f4e2425e5054fdfa64af3db8c0689d7`)
        .then(response => {
           //console.log(response.data.articles[0])
           let temp = response.data.articles[0]
           res.render('information', {temp})
            //return response
        
        })
        .catch(error => {
            console.error(error);
    });
        //console.log('i walkalon')
        ///res.render('information', {response})
    })

    

}

