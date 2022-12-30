const Hotel = require('../models/hotel');

exports.getAllHotel=async(req,res)=>{
    try{
        let filter={}
        if(req.query.uudai){
            filter.uudai=req.query.uudai
        }
        if(req.query.noibat){
            filter.noibat=req.query.noibat
        }
        if(req.query.tenht){
            filter.tenht={ "$regex": req.query.tenht, "$options": "i" }
        }
        const hotels= await Hotel.find(filter);
        res.send(hotels)
    }catch(e){
        res.status(500).send(e)
    }  
}

exports.getHotelByID=async (req,res)=>{
    const _id=req.params.id
    try{
        const hotel= await Hotel.findOne({_id})
        if(!hotel){
            return res.status(404).send("Not found")
        }
        res.send(hotel)
    }catch(e){
        res.status(500).send(e);
    }
}
exports.addHotel=async (req, res)=>{
    const hotel= new Hotel({
        ...req.body
    })
    try{
        if(await (await Hotel.find({})).length!==0){
            const hotelLast= await (await Hotel.find({})).splice(-1)
            const mahtLast= hotelLast[0].maht.substring(2) || "0" 
            const newmaht="HT"+ Number(Number(mahtLast)+1)
            hotel.maht=newmaht
        }
        await hotel.save()
        res.status(201).send(hotel)
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