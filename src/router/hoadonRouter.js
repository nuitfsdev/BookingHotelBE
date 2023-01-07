const express=require('express')
const router=new express.Router()
// const HoaDon=require('../models/hoadon')
// const CTHD=require('../models/cthd')
// const Car = require('../models/car')
// const User = require('../models/user')
// const authADandEP = require('../middleware/authADandEP')
// const auth = require('../middleware/auth')
const hoadonController=require('../controllers/hoadonController')


router.get('/hoadons',hoadonController.getAllHoadons )
router.get('/hoadons/:id',hoadonController.getHoadonByID)
router.post('/hoadons',hoadonController.addHoadon)
router.post('/hoadons/:id',hoadonController.updateHoadon)
router.delete('/hoadons/:id',hoadonController.deleteHoadon)
module.exports= router