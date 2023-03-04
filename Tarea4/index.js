const express = require('express')
const path = require('path')
const rutas = require('./rutas')
const {engine} = require('express-handlebars')

const app = express()
const port = 3000
 
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')

app.use('/assets', express.static(path.join(__dirname, 'assets')))

rutas(app)

app.listen(port, function() {
    console.log('Estamos en acción en el puerto: ' + port)
})