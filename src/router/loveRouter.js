const express=require('express');
const router=new express.Router()
// const authAd = require('../middleware/authAd');
const loveController=require('../controllers/loveController')

router.get('/loves/hotel', loveController.getAllHotel)
router.get('/loves/room',loveController.getAllRoom)
router.post('/loves/hotel',loveController.addLoveHotel)
router.post('/loves/room',loveController.addLoveRoom)
router.delete('/loves/hotel',loveController.deleteLoveHotel)
router.delete('/loves/room',loveController.deleteLoveRoom)

// router.put('/cars/:id',authAd,carController.updateCar)
// router.delete('/cars/:id',authAd,carController.deleteCar )

module.exports= router