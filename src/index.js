const express = require('express')
require('./db/mongoose')
const cors=require('cors')
const hotelRouter=require('./router/hotelRouter')
const roomRouter=require('./router/roomRouter')
const userRouter=require('./router/userRouter')
// const formRouter=require('./routers/form')
const hoadonRouter=require('./router/hoadonRouter')
const loveRouter=require('./router/loveRouter')
// const employeeRouter=require('./routers/employee')


const app = express()
const port=process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use(hotelRouter)
app.use(userRouter)
app.use(roomRouter)
app.use(loveRouter)
app.use(hoadonRouter)
// app.use(customerRouter)
// app.use(employeeRouter)


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(port, ()=>{
  console.log('Server is up on PORT '+port)
})