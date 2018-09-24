const MongORM = require('./MongORM');

const DeckManager = {
    addDeck(arr, cb) {
        MongORM.insertDocuments('decks', arr, function(response){
            cb(response);
        })
    },

    viewDecks(cb) {
        MongORM.findDocuments('decks', {}, function(response){
            cb(response);
        })
    },

    //Maybe I can fix this to update multiple cards at once if I can figure out how to store the updates in something other than state
    //Updates the SRS level of a card and it's last study date
    updateCard(cardID, SRS, cb){
        let now = new Date();
        MongORM.updateDocument('decks', cardID, {"SRSLevel" : SRS, "lastStudied" : now}, function(response){
            cb(response);
        })
    }
}

module.exports = DeckManager;



