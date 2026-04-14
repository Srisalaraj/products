const express=require("express")
const { postDetails, getDetails, updateDetails, deleteDetails } = require("../controller/controller")

const routes=express.Router()

routes.post("/product",postDetails)
routes.get("/getproduct",getDetails)
routes.put("/product/:id",updateDetails)
routes.delete("/product/:id",deleteDetails)

module.exports=routes