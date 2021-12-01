const MongoClient=require("mongodb").MongoClient
const url="mongodb://localhost:27017"

const dbName="phoneCollection"
const client=new MongoClient(url)
const database = client.db(dbName);
const phones = database.collection('phones');


const getByBrandNameController=async(req,res)=>{
    const {brandName}=req.body
    try {
        await client.connect();
        const resultFromPhones=await phones.find({brandName}).toArray()
         res.status(200).json({H_OK:"success",resultFromPhones})
      }catch(err){
          console.log(err)
          res.status(400).json({H_ERROR:"check the details",err})
  
      }finally {
        await client.close();
      }
}
const getByPriceController=async(req,res)=>{
    const {price}=req.body
    try {
        await client.connect();
        const resultFromPhones=await phones.find({price:{$lt:price}}).toArray()
         res.status(200).json({H_OK:"success",resultFromPhones})
      }catch(err){
          console.log(err)
          res.status(400).json({H_ERROR:"check the details",err})
  
      }finally {
        await client.close();
      }
}
const getByRatingController=async(req,res)=>{
    const {rating}=req.body
    try {
        await client.connect();
        const resultFromPhones=await phones.find({rating:{$gt:rating}}).toArray()
         res.status(200).json({H_OK:"success",resultFromPhones})
      }catch(err){
          console.log(err)
          res.status(400).json({H_ERROR:"check the details",err})
  
      }finally {
        await client.close();
      }
}

module.exports={
    getByBrandName:getByBrandNameController,
    getByPrice:getByPriceController,
    getByRating:getByRatingController
}