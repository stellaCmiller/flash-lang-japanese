const express = require('express');
const mongoRouter = express.Router();
const DeckManager = require('../models/DeckManager');
const Users = require('../models/Users');

//Adds a new user
mongoRouter.post('/Users', function(req, res){
    console.log("Adding new user...");
    const user = req.body;
    Users.addUser(user).then(function(){ 
        res.status(300).json({redirectURL: "/learn"}); 
    }).catch(function(err){
        res.status(400).json({error: err}); // When an error occurs
    })
})

//Create new deck
//change to users/{user}/decks/:id once user functionality is implemented
mongoRouter.post('/decks', function(req, res){
    console.log("Successfully connected to Deck Saver");
    const deck = req.body;
    DeckManager.addDeck(deck, function(res){
        console.log(res); //result of multiple callbacks, rippu
    });
    res.send({ status: 'SUCCESS' });
})

//Grab cards from a certain deck
//change to users/{user}/decks once user functionality is implemented
mongoRouter.get('/decks', function(req, res){
    console.log("Retrieving Your Decks...");
    DeckManager.viewDecks(function(response){
        res.json(response);
    });
})

//Update SRS and lastStudy Date for specific cards in a specific deck
//change to users/{user}/decks/{deck_id}
mongoRouter.put('/decks', function(req, res){
    console.log("Updating cards...");
    const cardID = req.body.ID;
    const SRS = req.body.SRS;
    DeckManager.updateCard(cardID, SRS, function(res){
        console.log("callback response received to router");
        console.log(res);
    });
    res.send({status: 'SUCCESS'});
})

module.exports = mongoRouter;