const MongoClient=require("mongodb").MongoClient
const url="mongodb://localhost:27017"

const dbName="phoneCollection"
const client=new MongoClient(url)
const database = client.db(dbName);
const phones = database.collection('phones');

const sortByNamePhonesController=async(req,res)=>{
    try {
      await client.connect();
      const resultFromPhones=await phones.find({}).sort({name:1}).toArray()
       res.status(200).json({H_OK:"success",resultFromPhones})
    }catch(err){
        console.log(err)
        res.status(400).json({H_ERROR:"check the details",err})

    }finally {
      await client.close();
    }
}

const sortByBrandNamePhonesController=async(req,res)=>{
    try {
      await client.connect();
      const resultFromPhones=await phones.find({}).sort({brandName:1}).toArray()
       res.status(200).json({H_OK:"success",resultFromPhones})
    }catch(err){
        console.log(err)
        res.status(400).json({H_ERROR:"check the details",err})

    }finally {
      await client.close();
    }
}
const sortByPriceHighToLowController=async(req,res)=>{
    try {
      await client.connect();  
      const resultFromPhones=await phones.find({}).sort({price:-1}).toArray()
       res.status(200).json({H_OK:"success",resultFromPhones})
    }catch(err){
        console.log(err)
        res.status(400).json({H_ERROR:"check the details",err})

    }finally {
      await client.close();
    }
}


const sortByPriceLowToHighControler=async(req,res)=>{
    try {
        await client.connect();
        const resultFromPhones=await phones.find({}).sort({price:1}).toArray()
         res.status(200).json({H_OK:"success",resultFromPhones})
      }catch(err){
          console.log(err)
          res.status(400).json({H_ERROR:"check the details",err})
  
      }finally {
        await client.close();
      }
}


const sortByRatingController=async(req,res)=>{
    try {
        await client.connect();
        const resultFromPhones=await phones.find({}).sort({rating:1}).toArray()
         res.status(200).json({H_OK:"success",resultFromPhones})
      }catch(err){
          console.log(err)
          res.status(400).json({H_ERROR:"check the details",err})
  
      }finally {
        await client.close();
      }
}

module.exports={
    sortByNamePhones:sortByNamePhonesController,
    sortByBrandNamePhones:sortByBrandNamePhonesController,
    sortByPriceHighToLow:sortByPriceHighToLowController,
    sortByPriceLowToHigh:sortByPriceLowToHighControler,
    sortByRating:sortByRatingController
}