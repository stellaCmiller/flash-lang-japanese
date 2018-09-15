const express = require('express');
const router = express.Router();
const queryDict = require('../models/QueryDict');

//Returns all matches for a given english word
router.get("/api/EtoJ/:word", function(req, res){
    let english = req.params.word;
    console.log("Successfully Connected To API Endpoint");
    queryDict.queryEnglish(english, function(response){
        console.log("Data passed to router successfully")
        res.json(response);
    });
});

//Returns all possible definitions of a particular entry
router.get("/api/entry/:id", function(req, res){
    let def_id = req.params.id;
    console.log("Successfully Connected To API Endpoint for more stuff");
    queryDict.expandData(def_id, function(response){
        console.log("Data passed to router successfully")
        res.json(response);
    });
});

module.exports = router
