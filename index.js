const express=require("express")
const cors=require("cors")
require("dotenv").config()
const { default: mongoose } = require("mongoose")
const routes=require("./src/routes/routes")


const app=express()
app.use(cors())
app.use(express.json());

app.use(routes)
const common=process.env
const port=common.PORT
const db=common.URL

mongoose.connect(db)

app.listen(port,()=>{
    console.log("server started at",port,"number");
})