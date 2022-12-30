const express=require('express');
const router=new express.Router()
// const authAd = require('../middleware/authAd');
const roomController=require('../controllers/roomController')

router.get('/rooms', roomController.getAllRoom)
router.get('/rooms/:id',roomController.getRoomByID)
router.post('/rooms',roomController.addRoom)
// router.put('/cars/:id',authAd,carController.updateCar)
// router.delete('/cars/:id',authAd,carController.deleteCar )

module.exports= router