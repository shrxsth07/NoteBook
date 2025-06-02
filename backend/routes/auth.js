const express=require('express');
const User=require('../models/User');
const router=express.Router();

//create a user using : post "api/auth/". doesn;t require auth
router.post('/',(req,res)=>{
    console.log(req.body);
    const user=User(req.body);
    user.save()
    res.send(req.body);
})
module.exports=router