const crypto = require('crypto');
const MongoORM = require('./MongORM');

//The user controller encrypts passwords for storage in MongoDB, and assigns them a JWT upon log in
const Users = {
    
    addUser: (user, cb) => {;
        if (validateAdd(user)){
            const password = user.password;
            const email = user.email;
            const salt = crypto.randomBytes(16).toString('hex'); // Generates a random secret for every User
            const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex'); //Generates a hash for every pw
            MongoORM.insertDocuments('Users', [{email, hash, salt}], function(response){
                cb(response);
            });
        }
    },

    /*Thankfully, the form input with an email field takes care of simple email validation, eliminating the use of complicated regex*/
    validateAdd: (user) => user.password === user.password-confirm, 

    validatePassword(password) {
        const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
        return this.hash === hash;
    },

    generateJWT() {
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 60); // expiration date of 1 hour

        return jwt.sign({
            email: this.email,
            id: this._id,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        }, 'secret');
    },

    authJSON() {
        return {
            _id: this._id,
            email: this.email,
            token: this.generateJWT(),
        };
    }
}

module.exports = Users;