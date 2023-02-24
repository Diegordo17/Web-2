const router = require('express').Router()
//const rutasHobbies = require('./hobbies')
//const rutasQuien = require('./quien')

function mid(req, res, next){
    next()
}

//router.use('/hobbies', mid, rutasHobbies)
//router.use('/hobbies', mid, rutasQuien)

module.exports = router