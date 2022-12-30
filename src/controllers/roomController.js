const Hotel = require('../models/hotel');
const Room = require('../models/room');

exports.getAllRoom=async(req,res)=>{
    try{
        let filter={}
        if(req.query.maht){
            filter.maht=req.query.maht
        }
        // if(req.query.noibat){
        //     filter.noibat=req.query.noibat
        // }
        const rooms= await Room.find(filter);
        res.send(rooms)
    }catch(e){
        res.status(500).send(e)
    }  
}

exports.getRoomByID=async (req,res)=>{
    const _id=req.params.id
    try{
        const room= await Room.findOne({_id})
        if(!room){
            return res.status(404).send("Not found")
        }
        res.send(room)
    }catch(e){
        res.status(500).send(e);
    }
}
exports.addRoom=async (req, res)=>{
    const room= new Room({
        ...req.body
    })
    try{
        const checkhotel=await Hotel.findOne({maht: room.maht})
        if(!checkhotel){
            return res.status(404).send("Not found hotel")
        }
        if((await Room.find({})).length!==0){
            const roomLast=(await Room.find({})).splice(-1)
            const maroomLast= roomLast[0].maroom.substring(2) || "0" 
            const newmaroom="RM"+ Number(Number(maroomLast)+1)
            room.maroom=newmaroom
        }
        await room.save()
        res.status(201).send(room)
    }catch(e){
        res.status(500).send(e)
    }
}
// exports.updateCar=async(req,res)=>{
//     const updates=Object.keys(req.body)
//     const allowUpdates=["ten","thuonghieu","socho","dongco","kichthuoc","nguongoc","vantoctoida","dungtich", "tieuhaonhienlieu","congsuatcucdai","mausac","gia","hinhanh","mota","namsanxuat","soluong","advice"]
//     const isValidOperation=updates.every((update)=>{
//         return allowUpdates.includes(update)
//     })
//     if(!isValidOperation)
//     {
//         return res.status(400).send("error: Invalid updates!")
//     }
//     try{
//         const car=await Car.findOne({_id: req.params.id})
//         if(!car){
//             return res.status(404).send()
//         }
//         updates.forEach((update)=>{
//             car[update]=req.body[update]
//         })
//         await car.save()
//         res.send(car)
//     } catch(e){
//         res.status(500).send(e)  
//     }
// }
// exports.deleteCar=async(req,res)=>{
//     try{
//         const car= await Car.findByIdAndDelete({_id: req.params.id})
//         if(!car){
//             return res.status(404).send()
//         }
//         res.send(car)
//     }catch(e){
//         res.status(500).send(e)
//     }
// }