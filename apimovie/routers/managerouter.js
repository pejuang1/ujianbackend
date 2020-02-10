const express = require('express')
const {managecontroller} = require('../controllers')

const router = express.Router()

router.post('/managemovies', managecontroller.postmovie)
router.post('/managecategories',managecontroller.postcategories)
router.put('/editmovies/',managecontroller.editmovie)
router.put('/editcategories',managecontroller.editcategory)
router.delete('/deletemovies/',managecontroller.deletemovie)
router.delete('/deletecategories',managecontroller.deletecategories)
router.post('/connectmovie',managecontroller.addconnectmoviecategory)
router.delete('/deleteconnectmovie',managecontroller.deleteconnectmoviecategory)
module.exports=router