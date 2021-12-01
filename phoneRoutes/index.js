const express=require("express")
const routes =express.Router()
const {addPhones,findPhones}=require("../controllers")
const {sortByNamePhones
    ,sortByBrandNamePhones,sortByPriceHighToLow,
    sortByPriceLowToHigh,sortByRating} =require("../controllers/sortController")


const {getByBrandName,getByPrice}=require("../controllers/filterController")

routes.post("/addPhones",addPhones)
routes.post("/findPhones",findPhones)

routes.get("/sortByNamePhones",sortByNamePhones)
routes.get("/sortByBrandNamePhones",sortByBrandNamePhones)
routes.get("/sortByPriceHighToLow",sortByPriceHighToLow)
routes.get("/sortByPriceLowToHigh",sortByPriceLowToHigh)
routes.get("/sortByRating",sortByRating)


routes.post("/getByBrandName",getByBrandName)
routes.post("/getByPrice",getByPrice)

module.exports=routes;
