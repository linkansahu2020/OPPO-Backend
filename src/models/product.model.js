const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {
        title: {type:String,required:true},
        price: {type:Number,required:true},
        offer: {type:Number,required:true},
        color: [{type:String,default:'white'}],
        image: {type:String,required:true},
        category: {type:String,required:true,default:'Smartphones'},
        model: {type:String,required:false}
    },{
        versionKey:false,
        timestamps:true
    }
)
module.exports = mongoose.model('products',productSchema)