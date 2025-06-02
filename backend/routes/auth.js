const express=require('express');
const User=require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');

//create a user using : post "api/auth/". doesn;t require auth
router.post('/',[
    body('name','Enter a valid name').isLength({min:10}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 10 characters').isLength({min:10}),
],(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user=>res.json(user));
})
module.exports=router