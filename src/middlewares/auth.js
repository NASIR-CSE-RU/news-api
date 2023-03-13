import jwt from 'jsonwebtoken'

const auth = async (req,res,next)=>{
    let token = req.headers.authorization;
    try{
        if(token){
            token = token.split(' ')[1];
            let user = jwt.verify(token,process.env.SECRET_KEY);
            req.userId=user.id;

        }else{
            return res.status(401).json({message:"Unauthorize access !!"})
        }
        next();

    }catch(error){
        console.log(error);
        res.status(401).json({message:"Unauthorize access !!"})
    }
}

export default auth;