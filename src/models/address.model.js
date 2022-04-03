const mongoose = require('mongoose')
const addressSchema = new mongoose.Schema(
    {
        Name: {type:String,required:true},
        Phonenumber: {type:String,required:true},
        HouseNumber: {type:String,required:true},
        AreaNo: {type:String,required:false},
        Pin: {type:String, required:true},
        City: {type:String, required:true},
        State: {type:String, required:true},
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'users',
            required: true
        }
    },{
        versionKey:false,
        timestamps:true
    }
)
module.exports = mongoose.model('address',addressSchema)