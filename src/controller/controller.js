const db=require("../models/models")

exports.postDetails=async(req,res)=>{
   try{
     const{title,price,image}=req.body
    let data=await db.create({title,price,image})
    res.status(200).json({message:"the product is added",data})
   }catch(err){
    res.status(400).json({message:err.message})
   }
}

exports.getDetails=async (req,res)=>{
    try{
        let data=await db.find();
        res.status(200).json({message:"the products have fetched sucessfully",data});
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.updateDetails=async (req,res)=>{
    try{
        let {id}=req.params
    const{title,price,image}=req.body
    const data=await db.findByIdAndUpdate(id,{title,price,image},{new:true})
    res.status(201).json({message:"the data is update sucessfully",data})
    }catch(err){
         res.status(400).json({message:err.message})
    }
}

exports.deleteDetails=async(req,res)=>{
    try{
        let {id}=req.params
        const data=await db.findByIdAndDelete(id)
         res.status(201).json({message:"the data is deleted sucessfully",data})
    }catch(err){
         res.status(400).json({message:err.message})
    }
}
