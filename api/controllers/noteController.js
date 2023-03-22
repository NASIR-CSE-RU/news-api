import noteModel from '../models/note.js'
// app.use(sendResponse);
export const create = async (req,res) =>{
    const {title,description}=req.body;
    try{
        const note = await noteModel.create({
        title:title,
        description:description,
        userId:req.userId
    });
    if(!note){
        return res.sendResponse(404,"Note cannot be saved !!",null)
    }
    res.sendResponse(200,"Note saved successfully.",note);
}catch(error){
    console.log(error);
    res.sendResponse(500,"Something error occured");
}
} 

export const all = async (req,res) =>{
    try{
        const notes= await noteModel.find({});
        let response={success:true,message:`${notes.length} notes found!`,data:notes}
        res.sendResponse(200,`${notes.length} notes found!`,notes);
    }catch(error){
        console.log(error);
        res.sendResponse(500,error.message)
    }
}

export const update = (req,res) =>{
const id= req.params.id
res.status(200).json({id:id});
}