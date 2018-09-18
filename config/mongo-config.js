let config = {};
config.db = {
    MONGO_URL: process.env.MONGODB_URL,
    DB_NAME: process.env.MONGODB_DB,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD
};

module.exports = config;

