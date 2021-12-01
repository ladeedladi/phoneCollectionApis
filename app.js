const express=require("express")
const app=express()
const phoneRoutes=require("./phoneRoutes")

const phoneSortRoute=require("./phoneRoutes/sortRoutes")

const phoneFilterRoute=require("./phoneRoutes/filterRoutes")
app.use(express.json())

app.use("/phones",phoneRoutes)

app.use("/sortPhones",phoneSortRoute)

app.use("/filterPhones",phoneFilterRoute)

app.listen(3000)