const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    password:{type:String}
})
const User=mongoose.model("User",userschema)
module.exports=User