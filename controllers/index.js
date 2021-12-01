const MongoClient=require("mongodb").MongoClient
const url="mongodb://localhost:27017"

const dbName="phoneCollection"
const client=new MongoClient(url)
const database = client.db(dbName);
const phones = database.collection('phones');

const addPhonesController=async(req,res)=>{
    const {name,brandName,price,rating}=req.body

    try {
      await client.connect();
      const resultFromPhones=await phones.insertOne({
        name,brandName,price,rating
      })
  

       res.status(200).json({H_OK:"success",resultFromPhones})
    }catch(err){
        console.log(err)
        res.status(400).json({H_ERROR:"check the details",err})

    }finally {
      await client.close();
    }
}

const findPhonesController=async(req,res)=>{
    const {name,brandName}=req.body

    try {
      await client.connect();
      const resultFromPhones=await phones.findOne({
        name,brandName
      })
       res.status(200).json({H_OK:"success",resultFromPhones})
    }catch(err){
        console.log(err)
        res.status(400).json({H_ERROR:"check the details",err})

    }finally {
      await client.close();
    }
}




module.exports={
    addPhones: addPhonesController,
    findPhones:findPhonesController,
    
}
