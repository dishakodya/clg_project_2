const mongoose=require('mongoose');

const schema  = mongoose.Schema({
    id:String,
    name:String,
    color:String,
    price:String,
    Image:String
})
const model = mongoose.model('pro', schema);
module.exports = model;