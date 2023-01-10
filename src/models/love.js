const mongoose=require('mongoose')
//const validator=require('validator')
const loveSchema=new mongoose.Schema({
    maht:{
        type:Array
    },
    makh: {
        type: String
    },
    maroom: {
        type: Array,
    }
})
const Love=mongoose.model('Love',loveSchema)
module.exports= Love