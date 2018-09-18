const config = require('../config/mongo-config');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;
const mongoURI = `${config.MONGO_URI}`;

//I probably could have saved myself all this trouble by using mongoose but why do things the easy way?
const MongORM = {

    insertDocuments(col, docArray, callback) {
        console.log("attempting to connect to mongo DB");
        console.log("the URI im using is: " +mongoURI)
        MongoClient.connect(mongoURI, { useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            console.log("Successfully Connected to MongoDB");
            const collection = db.collection(col);
            collection.insertMany(docArray, function(err, res) {
                if (err) throw err;
                console.log(`Inserted ${docArray.length} documents into the collection`);
                callback(res);
                client.close();
            });
        });
    },
        
    findDocuments(col, callback) {
        MongoClient.connect(mongoURI, function(err, db) {
            if (err) throw err;
            console.log("Successfully Connected to MongoDB");
            const collection = db.collection(col);
            collection.find({}).toArray(function(err, res){
                if (err) throw err;
                callback(res);
                client.close();
            });
        });
    },

    //Change to multiple documents eventually
    updateDocument(col, docID, updates, callback) {
        MongoClient.connect(mongoURI, function(err, db){
            if(err) throw err;
            const collection = db.collection(col);
            collection.findOneAndUpdate({_id : ObjectID(docID)},{$set : updates}).then(res => {
                callback(res);
            })
        });
    }
}

module.exports = MongORM;