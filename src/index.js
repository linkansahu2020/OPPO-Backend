const express = require('express')
const connect = require('./configs/db')

const app = express()
app.use(express.json())

const productsController = require('./controllers/product.controller')

app.use('/products',productsController)

app.listen(8080,async()=>{
    try{
        await connect()
        console.log("My port is 8080")
    } catch(err){
        console.log({Error:err.message})
    }
})