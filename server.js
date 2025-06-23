const express = require('express')
const app = express()
const morgan = require('morgan')
// const bodyParser = require('body-parser')
// const {readdirSync} = require('fs')
const product = require('./routers/product')
const cors = require('cors')



// middle ware
app.use(morgan('dev'))
// app.use(bodyParser.json())
app.use(cors())

// readdirSync()

app.use('/api',product)

app.post('/api',(req,res)=>{
    console.log(req.body)
    res.send(req.body)

res.send('Hello Server')
})




app.listen(5000,()=> 
    console.log(`Server is Running on port 5000`))