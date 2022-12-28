const express = require('express')
require('./db/mongoose')
const cors=require('cors')
const hotelRouter=require('./router/hotelRouter')
// const userRouter=require('./routers/user')
// const newsRouter=require('./routers/news')
// const formRouter=require('./routers/form')
// const hoadonRouter=require('./routers/hoadon')
// const customerRouter=require('./routers/customer')
// const employeeRouter=require('./routers/employee')


const app = express()
const port=process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use(hotelRouter)
// app.use(userRouter)
// app.use(newsRouter)
// app.use(formRouter)
// app.use(hoadonRouter)
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