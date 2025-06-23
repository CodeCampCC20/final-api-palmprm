const express = require('express')
const router = express.Router()
const {create}= require('../controllers/product')



router.get('/product', (req, res) => {


})
router.get('/product/:productsId', (req, res) => {
    //code
    console.log(req.params)
    res.send('Hello GET ID Product')

})
router.post('/products', (req, res) => {
    res.send('Hello POST')
})
router.put('/product', (req, res) => {
})
module.exports = router