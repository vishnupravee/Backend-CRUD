


const User=require("../modals/Schema")

const jwt=require('jsonwebtoken')
const Schemafunction=async(req,res)=>{

    const{Name,Email,password}=req.body
    const user = await User.findOne({Name,Email,password})
    if(user){
                res.json("user all ready exist")
    }
  else{
    const userDetails=await User.create({
        Name,
        Email,
        password
    })
    res.json({
        Name:userDetails.Name,
        Email:userDetails.Email,
        password:userDetails.password,
     Tocken:generateTocken (userDetails.Name)
    
    })
}    
        
    
    }

    
    const generateTocken=(id)=>{
        return jwt.sign({id},process.env.JWT_SECRET,{
            expiresIn:'1d',
        })
    }

module.exports=Schemafunction
