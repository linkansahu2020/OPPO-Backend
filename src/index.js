const express = require('express')
const connect = require('./configs/db')
require('dotenv').config();
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const productsController = require('./controllers/product.controller')
const usersController = require('./controllers/user.controller')
const addressController = require('./controllers/address.controller')

app.use('/products',productsController)
app.use('/users',usersController)
app.use('/address',addressController)

app.get("",(req,res)=>{
    return res.send("Hello")
})

const port = process.env.PORT || 2345

app.listen(port,async()=>{
    try{
        await connect()
        console.log("My port is 8080")
    } catch(err){
        console.log({Error:err.message})
    }
})