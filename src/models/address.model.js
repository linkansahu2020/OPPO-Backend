const mongoose = require('mongoose')
const addressSchema = new mongoose.Schema(
    {
        name: {type:String,required:true},
        mobile: {type:Number,required:true},
        house_no: {type:Number,required:true},
        building_no: {type:String,required:false},
        pin: {type:Number, required:true},
        city: {type:String, required:true},
        state: {type:String, required:true},
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