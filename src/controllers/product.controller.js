const express = require('express')
const router = express.Router()
const Product = require('../models/product.model')

router.get('',async(req,res)=>{
    try{
        const products = await Product.find().lean().exec()
        return res.status(201).send(products)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})
router.get('/:category/:id',async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        return res.status(201).send(product)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})
router.get('/:category/:model',async(req,res)=>{
    try{
        const products = await Product.find({model:req.params.model});
        return res.status(201).send(products)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})
router.get('/:category',async(req,res)=>{
    try{
        const products = await Product.find({category:req.params.category}).lean().exec()
        return res.status(201).send(products)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})
router.post('',async(req,res)=>{
    try{
        const products = await Product.create(req.body);
        return res.status(201).send(products)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})

module.exports = router;