
// yha sara jo controlers rha ga vo always async await k function m rha ga 



//import Users from '../models/users.js'
const Users= require("../models/users")
const ShowingallDataofUser = async(req,res)=>{
    const userss = await Users.find({})
return res.json(userss)
}
const CreatingAllUsers = async(req,res)=>{
    const body = req.body
    const result= await Users.create({
        Firstname:body.first_name,
        lastname:body.last_name,
        email:body.email,
        gender:body.gender
    })
 
    console.log(result);
    
  return res.status(201).json({msg:"successfully"})
}

const FindTheUserById=async(req,res)=>{

    const userid = await Users.findById(req.params.id)
    if(!userid){res.status(404).json({err : "useer not found"}) }
    return res.json(userid)
}

const UpdateTheUserById = async(req,res)=>{
    const update = await Users.findByIdAndUpdate(req.params.id,{lastname:"heho  changed"})
    return res.json({ message:"success"})
 
}

const DeleteUserById = async(req,res)=>{
    const del = await Users.findByIdAndDelete(req.params.id)
    return res.json({ message:"success"})
    
}


module.exports={
    ShowingallDataofUser,
    CreatingAllUsers,
    FindTheUserById,
    UpdateTheUserById,
    DeleteUserById
}