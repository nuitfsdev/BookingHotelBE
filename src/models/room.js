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
    loaigiuong: {
        type: String,
        default: "Giường đôi",
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
    tienichs: [{
        tienich:{
            type: String,
        },
        hinh:{
            type: String,
        }
    }],
    mota: {
        type: String,
        required: true,
        trim: true,
    },
    tinhtrang: {
        type: String,
        default: "còn phòng"
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
    giagio2: {
        type: Number,
        default: 50000,
        required: true,
    },
    giangay: {
        type: Number,
        required: true,
        trim: true,
    },
    giatreem: {
        type: Number,
        default: 50000
    },
    slnguoilon: {
        type: Number,
        default: 2
    },
    sltreem: {
        type: Number,
        default: 2
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