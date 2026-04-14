const db=require("mongoose")

const productDetails=new db.Schema({
          title:{
            require:true,
            type:String
          },
          price:{
            require:true,
            type:Number
          },
          image:{
            require:true,
            type:String
          }
})

module.exports=db.model("productDetails",productDetails,"productDetails")