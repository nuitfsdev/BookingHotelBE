const mongoose=require('mongoose')
//const validator=require('validator')
const hoadonSchema=new mongoose.Schema({
    mahd: {
        type: String,
        default: "HD0",
        required: true,
        trim: true,
    },
    makh: {
        type: String,
        required: true,
        trim: true,
    },
    maht: {
        type: String,
        required: true,
        trim: true,
    },
    maroom: {
        type: String,
        required: true,
        trim: true,
    },
    tenkh: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    sdt: {
        type: String,
        trim: true,
    },
    ngayhd: {
        type: String,
        required: true,
        trim: true,
    },
    tinhtrang: {
        type: String,
        trim: true,
    },
    gia: {
        type: Number,
        default: 0,
        required: true,
    },
    trigia: {
        type: Number,
        default: 0,
        required: true,
    },
    ptdatphong: {
        type: String,
        trim: true,
    },
    ngaynhan: {
        type: String,
        required: true,
        trim: true,
    },
    ngaytra: {
        type: String,
        required: true,
        trim: true,
    },
    gionhan: {
        type: String,
        required: true,
        trim: true,
    },
    giotra: {
        type: String,
        required: true,
        trim: true,
    },
    sogio: {
        type: Number,
        default: 0,
    },
    songay: {
        type: Number,
        default: 0,
    },
    slnguoilon: {
        type: Number,
        default: 0,
    },
    sltreem: {
        type: Number,
        default: 0,
    },
    slphong: {
        type: Number,
        default: 1,
    },
    phuongthuc:{
        type: String,
        require: true
    },
    nganhang: {
        type: String,
    },
    tennganhang: {
        type: String,
    },
    sotaikhoan: {
        type: String,
    },
    khac:{
        type: String
    }
    
},{timestamps: true})
const HoaDon=mongoose.model('HoaDon',hoadonSchema)
module.exports= HoaDon