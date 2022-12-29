const mongoose=require('mongoose')
//const validator=require('validator')
const hotelSchema=new mongoose.Schema({
    maht:{
        type:String,
        default: "HT0"
    },
    tenht: {
        type: String,
        required: true,
        trim: true,
    },
    diachi: {
        type: String,
        required: true,
        trim: true,
    },
    tinh: {
        type: String,
        required: true,
        trim: true,
    },
    quan: {
        type: String,
        required: true,
    },
    sosao: {
        type: Number,
        required: true,
    },
    tienich: {
        type: Array,
        required: true,
    },
    mota: {
        type: String,
        required: true,
        trim: true,
    },
    hinh:{
        type: Array,
        required: true,
        trim: true,
    },
    giamin: {
        type: Number,
        required: true,
        trim: true,
    },
    giamax: {
        type: Number,
        required: true,
        trim: true,
    },
    uudai: {
        type: Boolean,
        default: false
    },
    noibat: {
        type: Boolean,
        default: false
    },
    trangthai: {
        type: Boolean,
        default: true
    },
    lienhe: {
        type: String,
        require: true
    },
    map: {
        type: String,
        require: true
    },
    kieudat: {
        type: Array
    }
},{timestamps: true})
const Hotel=mongoose.model('Hotel',hotelSchema)
module.exports= Hotel