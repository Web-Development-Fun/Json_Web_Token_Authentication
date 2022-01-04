const router =require('express').Router();
const verify=require("./verifyToken");



router.get('/',verify,(req,res)=>{
    // res.json({posts :{
    //     title:"My first Post",
    //     description: "random data you shouldn't access"
    //}})


    // private route
    console.log("Hello");
    res.send(req.user);
    // User.findbyOne({_id:req.user});
})

module.exports= router;
