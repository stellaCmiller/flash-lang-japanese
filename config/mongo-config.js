let config = {};
config.db = {
    MONGO_URL: process.env.MONGODB_URL,
    DB_NAME: process.env.MONGODB_DB
};


module.exports = config;