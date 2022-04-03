const express = require('express')

const router = express.Router()
const Address = require('../models/address.model')

router.get('/:id',async(req,res)=>{
    try{
        const address = await Address.find({user_id:req.params.id}).lean().exec();
        return res.status(201).send(address)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})
router.get('/one/:id',async(req,res)=>{
    try{
        const address = await Address.findById(req.params.id).lean().exec();
        return res.status(201).send(address)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})
router.post('/',async(req,res)=>{
    try{
        const address = await Address.create(req.body);
        return res.status(201).send(address)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})

module.exports = router;