const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {
        title: {type:String,required:true},
        price: {type:Number,required:true},
        offer: {type:Number,required:true},
        color: [{type:String}],
        accessories:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'accessories',
                required: true
            }
        ]
    },{
        versionKey:false,
        timestamps:true
    }
)
module.exports = mongoose.model('products',productSchema)