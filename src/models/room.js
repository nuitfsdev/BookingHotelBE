const mongoose=require('mongoose')
//const validator=require('validator')
const roomSchema=new mongoose.Schema({
    maroom:{
        type:String,
        default: "RM0"
    },
    maht: {
        type: String,
        required: true,
        trim: true,
    },
    tenphong: {
        type: String,
        required: true,
        trim: true,
    },
    loaiphong: {
        type: String,
        required: true,
        trim: true,
    },
    dientich: {
        type: String,
        required: true,
        trim: true,
    },
    sogiuong: {
        type: Number,
        require: true
    },
    soluong: {
        type: Number,
        required: true,
    },
    tinhtrang: {
        type: Boolean,
        default: true
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
    giagio: {
        type: Number,
        required: true,
        trim: true,
    },
    giangay: {
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
    khac:{
        type: Array
    },
},{timestamps: true})
const Room=mongoose.model('Room',roomSchema)
module.exports= Room