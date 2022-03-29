const express = require('express')
const connect = require('./configs/db')

const app = express()
app.use(express.json())

const productsController = require('./controllers/product.controller')
const usersController = require('./controllers/user.controller')

app.use('/products',productsController)
app.use('/users',usersController)

app.get("",(req,res)=>{
    return res.send("Hello")
})

app.listen(8080,async()=>{
    try{
        await connect()
        console.log("My port is 8080")
    } catch(err){
        console.log({Error:err.message})
    }
})