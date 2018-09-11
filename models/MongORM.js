const config = require('../db-config/mongo-config');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoURL = `${config.db.host}`;
const dbName = config.db.name;

const MongORM = {

    insertDocuments(col, docArray, callback) {
        MongoClient.connect(mongoURL, function(err, client) {
            console.log("Successfully Connected to MongoDB");
            if (err) throw err;
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
        MongoClient.connect(mongoURL).then(db => {
            const collection = db.collection(col);
            collection.find({}).toArray(function(err, res){
                if (err) throw err;
                console.log(res);
                callback(res);
            });
        });
    }
}

module.exports = MongORM;