const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
const {verificationMail} = require('../configs/utils')
const {body,validationResult} = require('express-validator')

router.get('',async(req,res)=>{
    try{
        const users = await User.find().lean().exec();
        return res.status(201).send(users)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})
router.post('/verify',
body("email").notEmpty().isEmail(),
async(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ Errors: errors.array() });
        }
        let otp = Math.floor(Math.random() * (9999 - 1000) ) + 1000
        eventEmitter.on("User Registration", verificationMail);
        eventEmitter.emit("User Registration", {
            from: 'admin@oppo.com',
            email: req.body.email,
            otp
        })

        return res.status(201).send({message:'OTP send to the Email id',otp})
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})

module.exports = router