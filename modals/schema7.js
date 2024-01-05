const mongoose=require("mongoose")

const expertschema=mongoose.Schema({
  name:{type:String},
  email:{type:String},
  password:{type:String}

})
const boom=mongoose.model("boom",expertschema)
module.exports=boom