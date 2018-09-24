const express = require('express');
const userRouter = express.Router();
const Users = require('../models/Users');

userRouter.post('/Users/login', function(req, res){
    const user = req.body;
    Users.logInUser(user).then(function(){ 
        res.status(300).json({redirectURL: "/learn"}); //login succeeded, redirected to learn
    }).catch(function(err){
        res.status(400).json({error: err}); //error logging in
    })
})

module.exports = userRouter;