const express=require("express")
const routes =express.Router()
const {sortByNamePhones
    ,sortByBrandNamePhones,sortByPriceHighToLow,
    sortByPriceLowToHigh,sortByRating} =require("../controllers/sortController")




routes.get("/sortByNamePhones",sortByNamePhones)
routes.get("/sortByBrandNamePhones",sortByBrandNamePhones)
routes.get("/sortByPriceHighToLow",sortByPriceHighToLow)
routes.get("/sortByPriceLowToHigh",sortByPriceLowToHigh)
routes.get("/sortByRating",sortByRating)




module.exports=routes;
