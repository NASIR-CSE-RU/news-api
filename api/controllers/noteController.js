import noteModel from '../models/note.js'

export const create = async (req,res) =>{
    const {title,description}=req.body;
    try{
        const note = await noteModel.create({
        title:title,
        description:description,
        userId:req.userId
    });
    if(!note){
        return res.status(404).json({message:"Note cannot be saved !!"})
    }
    res.status(200).json({success:true,message:"Note saved successfully.",data:note});
}catch(error){
    console.log(error);
    res.status(500).json({message:"Something error occured"});
}
} 

export const all = async (req,res) =>{
    try{
        const notes= await noteModel.find({});
        res.status(200).json({success:true,message:`${notes.length} notes found!`,data:notes})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"something wrong!!"})
    }
}

export const update = (req,res) =>{
const id= req.params.id
res.status(200).json({id:id});
}