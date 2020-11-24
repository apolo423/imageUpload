const express = require("express");
const router = express.Router();

const Facebook = require("../../models/Facebook")

router.post('/post',async(req,res)=>{
    try{
       let val = req.body.params
       let product = await Facebook.create(req.body.params)
       res.status(200).json({result:true})
    }catch(err){
        console.log(err)
        res.status(400).json({result:false})
    }
})
router.get("/get", async(req,res) => {
 //   console.log('asdf')
    try{
    //    console.log('get')
        let products = await Facebook
        .find()
        .sort({'date':'asc'})
        res.status(200).json({
            products:products
        })
    }catch(err){
        console.log(err)
        res.status(400).json({result:false})
    }
})

module.exports = router;
