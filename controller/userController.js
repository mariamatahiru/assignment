
import {UserSchema} from "../model/user.js";

//create user
const createUser =async (req,res)=>{
try{
    const newUser = await UserSchema.create({...req.body});
    return res.status(201).json({
        status:true,
        message:'User has been created',
        data:newUser
    })
}catch(error){
    console.log('something went wrong',error)
}
}
//get all users
const getAllUsers = async(req,res)=>{
    try{
        const users = await UserSchema.create({...req.body});
        return res.status(200).json({
            status:true,
            message:'users fetch successfully',
            body:users
        })
    }catch(error){
        console.log('something went wrong',error)
    }
}

export{
    getAllUsers,
    createUser
}