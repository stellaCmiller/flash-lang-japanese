const express = require('express');
const userRouter = express.Router();
const Users = require('../models/Users');

userRouter.get('/Users/:email', function(req, res){
    const userEmail = req.params.email;
    console.log(userEmail);
    Users.logInUser(userEmail).then(function(){ 
        console.log("Something happened but idk what");
    }).catch(function(err){
        console.log("An error occured, and this could be that no user exists, or you have the wrong password");
    })
})

module.exports = userRouter;