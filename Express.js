

const express= require("express")
require("dotenv").config();
const connectDB = require("./Main.js/Database")
// const router = require("./Main.js/Router")
// const router = require("./Main.js/Router1")
//  const router = require("./Main.js/Router2")
const router = require("./Main.js/Router")


const app=express()
connectDB()

app.use(express.json())

app.use('/',router)

app.get("/",(req,res)=>{
    res.send("<h1>server running</h1>")
   
})
const PORT=3000
app.listen(PORT,()=>console.log(`running ${PORT}`))


