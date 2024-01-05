const jwt=require('jsonwebtoken')
const project = async(req,res,next)=>{
    let tocken;
    if(req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
        try{
            tocken=req.headers.authorization.split(" ")[1];
            jwt.verify(tocken,process.env.JWT_SECRET);
            next();
        }catch(error){
            res.status(401).send("login failed");
            throw new Error("Not authorized, tocken");

        }
        }
        if(!tocken){
            res.status(401).send("No tocken");
            throw new Error("Not authorized,no tocken");

        }
    };

module.exports=project