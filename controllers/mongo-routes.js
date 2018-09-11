const express = require('express');
const mongoRouter = express.Router();
const DeckManager = require('../models/DeckManager');

//change to users/{user}/decks/:id once user functionality is implemented
mongoRouter.post('/decks', function(req, res){
    const deck = req.body;
    console.log("Successfully connect to FlashLang Deck Saver API");
    DeckManager.addDeck(deck, function(res){
        console.log(res); //result of multiple callbacks, rippu
    });
    res.send({ status: 'SUCCESS' });
})

module.exports = mongoRouter;