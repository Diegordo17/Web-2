const express = require('express')
const rutas = require('./rutas')
const path = require('path')

const {engine} = require('express-handlebars')

const app = express()

app.engine('hanldebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

const port = 3000

app.use('/dist', express.static(path.join(__dirname, 'dist')))

//app.use('', routes)
rutas(app)

app.listen(port, function (){
    console.log('app is running in the port: ' + port)
})