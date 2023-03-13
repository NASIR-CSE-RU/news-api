import userModel from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY=process.env.SECRET_KEY


export const signup = async (req,res) =>{
const {username,email,password} = req.body;
    try{
        const existUser= await userModel.findOne({email:email});
        if(existUser){
            return res.status(400).json({message:"User Already exists!"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await userModel.create({
            username:username,
            email:email,
            password:hashedPassword
        });
        const token = jwt.sign({email:newUser.email,id:newUser._id},SECRET_KEY);
        res.status(201).json({user:newUser,token:token})
    }catch(error){
        console.log(error);
        res.status(500).json({message:'Unable to register user!!!'})
    }
}

export const signin = async (req,res) =>{
    const {email,password} = req.body;

    try{
        const existUser= await userModel.findOne({email:email});
        if(!existUser){
            return res.status(404).json({message:"User not found !!"});
        }
        const matchPassword = await bcrypt.compare(password,existUser.password);
        if(!matchPassword){
            return res.status(404).json({message:"credential does not matched !!"})
        }
        const token = jwt.sign({email:existUser.email,id:existUser._id},SECRET_KEY);
        res.status(201).json({user:existUser,token:token})

    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong !!"})
    }

}
