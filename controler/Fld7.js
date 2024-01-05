const boom = require("../modals/schema6")


const normalfunction=async(req,res)=>{

   


    const {id}=req.params.id.trim();
  const gate=await boom.findByIdAndRemove({_id:id})
    res.json("user deleted")
   
}

module.exports=normalfunction