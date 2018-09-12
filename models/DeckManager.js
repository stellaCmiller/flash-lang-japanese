const MongORM = require('./MongORM');

const DeckManager = {
    addDeck(arr, cb) {
        MongORM.insertDocuments('decks', arr, function(response){
            cb(response);
        })
    },

    viewDecks(cb) {
        MongORM.findDocuments('decks', function(response){
            cb(response);
        })
    }
}

module.exports = DeckManager;


