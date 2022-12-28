const express=require('express');
const router=new express.Router()
// const authAd = require('../middleware/authAd');
const hotelController=require('../controllers/hotelController')

router.get('/hotels', hotelController.getAllHotel)
router.get('/hotels/:id',hotelController.getHotelByID)
router.post('/hotels',hotelController.addHotel)
// router.put('/cars/:id',authAd,carController.updateCar)
// router.delete('/cars/:id',authAd,carController.deleteCar )

module.exports= router