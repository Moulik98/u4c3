const express = require('express');

const User = require("../models/user.models");


router.post("/"async (req,res) =>{
    try {
        const user= await User.create(req.body)

        return res.status(201).send(user)
    } catch(err){
        return res.status(500).send({message: err.message})
    }
})



const router = express.Router();
module.exports= router