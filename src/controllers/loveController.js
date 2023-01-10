const express=require('express')
const Hotel = require('../models/hotel')
const Love = require('../models/love')
const Room = require('../models/room')
const User = require('../models/user')
const router=new express.Router()
// const HoaDon=require('../models/hoadon')
// const User = require('../models/user')
// // const order=require('../email/orderEmail')
// // const invoice=require('../email/invoiceEmail')



exports.getAllHotel=async(req,res)=>{
    try{
        const loves= await Love.findOne({makh: req.query.makh})
        if(!loves){
            return res.status(404).send([]);
        }
        let listHotel=[]
        for(var item of loves.maht)
        {
            const hotel=await Hotel.find({maht: item})
            listHotel.push(hotel[0])
        }
        res.send(listHotel)
    }catch(e){
        res.status(500).send(e)
    }
    
}
exports.getAllRoom=async(req,res)=>{
    try{
        const loves= await Love.findOne({makh: req.query.makh})
        if(!loves){
            return res.status(404).send([])
        }
        let listRoom=[]
        for(var item of loves.maroom)
        {
            const room=await Room.find({maroom: item})
            listRoom.push(room[0])
        }
        res.send(listRoom)
    }catch(e){
        res.status(500).send(e)
    }
}

exports.addLoveHotel=async (req, res)=>{

    try{
        let love=await Love.findOne({makh: req.query.makh})
        if(!love){
            let love= new Love();
            love.makh=req.query.makh
            love.maht.push(req.query.maht)
            await love.save()
            res.status(201).send(love)
        }
        else
        {
            love.maht.push(req.query.maht)
            await love.save()
            res.status(201).send(love)
        }
    }catch(e){
        res.status(500).send(e.message)
    }
}
exports.addLoveRoom=async (req, res)=>{
    try{
        let love=await Love.findOne({makh: req.query.makh})
        if(!love){
            let room= new Love();
            room.makh=req.query.makh
            room.maroom.push(req.query.maroom)
            await room.save()
            res.status(201).send(room)
        }
        else
        {
            love.maroom.push(req.query.maroom)
            await love.save()
            res.status(201).send(love)
        }
    }catch(e){
        res.status(500).send(e.message)
    }
}

exports.deleteLoveHotel=async(req,res)=>{
    try{
        let love=await Love.findOne({makh: req.query.makh})
        if(!love){
            return res.send("User not exists!")
        }
        love.maht=love.maht.filter(item=>item!==req.query.maht)
        await love.save()
        res.status(200).send(love)
    }catch(e){
        res.status(500).send(e)
    }
}
exports.deleteLoveRoom=async(req,res)=>{
    try{
        let love=await Love.findOne({makh: req.query.makh})
        if(!love){
            return res.send("User not exists!")
        }
        love.maroom=love.maroom.filter(item=>item!==req.query.maroom)
        await love.save()
        res.status(200).send(love)
    }catch(e){
        res.status(500).send(e)
    }
}
