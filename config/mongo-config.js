let config = {};
config.db = {
    MONGO_URL: process.env.MONGODB_URL,
    DB_NAME: process.env.MONGODB_DB || 'flash-lang-japanese',
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_DEV : 'mongodb://localhost:27017'
};

module.exports = config;

