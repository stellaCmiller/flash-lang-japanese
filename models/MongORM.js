const config = require('../db-config/mongo-config');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoURL = `${config.db.host}`;
const dbName = config.db.name;

const MongORM = {

    insertDocuments(col, docArray, callback) {
        MongoClient.connect(mongoURL, function(err, client) {
            if (err) throw err;
            console.log("Successfully Connected to MongoDB");
            const db = client.db(dbName);
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
        MongoClient.connect(mongoURL, function(err, client) {
            if (err) throw err;
            console.log("Successfully Connected to MongoDB");
            const db = client.db(dbName);
            const collection = db.collection(col);
            collection.find({}).toArray(function(err, res){
                if (err) throw err;
                callback(res);
                client.close();
            });
        });
    }
}

module.exports = MongORM;