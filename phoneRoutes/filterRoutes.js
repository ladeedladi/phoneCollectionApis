const express=require("express")
const routes =express.Router()


const {getByBrandName,getByPrice,getByRating}=require("../controllers/filterController")



routes.post("/getByBrandName",getByBrandName)
routes.post("/getByPrice",getByPrice)
routes.post("/getByRating",getByRating)

module.exports=routes;
