const express=require("express")
const app=express()
const phoneRoutes=require("./phoneRoutes")

app.use(express.json())
app.get("/",(req,res)=>{
    res.json({"name":"lad","a":a})
})
app.use("/phones",phoneRoutes)




app.listen(3000)