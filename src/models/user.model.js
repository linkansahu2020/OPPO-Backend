const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        email: {type:String,required:false},
        phone: {type:Number,required:false},
        password: {type:Number,required:true}
    },{
        versionKey:false,
        timestamps:true
    }
)
module.exports = mongoose.model('users',userSchema)