const mongoose = require('mongoose');
module.exports = ()=>{
    return mongoose.connect('mongodb+srv://linkan:linkan_1234@cluster0.hgvum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
}