const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const path = require('path')

app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use(express.json({ limit: "5mb" }))
mongoose.set("strictQuery",true);
mongoose.connect("mongodb://127.0.0.1:27017/assa", {useNewUrlParser: true}).then(()=>{console.log("success ")}).catch((err)=>{console.log("error")})

app.use('/api/user', require('./router/userroutes'))
app.use('/api/news',require('./router/YangilikRoutes'))
app.use('/api/photo',require('./router/photoroutes'))
app.use('/api/banner',require('./constroller/banner/route'))
app.use('/api/media',require('./router/media'))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`${PORT} server running now`)
})