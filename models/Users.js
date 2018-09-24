const crypto = require('crypto');
const MongoORM = require('./MongORM');

//The user controller encrypts passwords for storage in MongoDB, and assigns them a JWT upon log in
const Users = {

    //Checks for any issues with sign up, then encrypts the user password
    addUser: async function (user) {
            await Promise.all([
                Users.checkUsernameExists(user.email), //This always resolves last because of the time it takes to search :(
                Users.passwordAddFail(user)
            ]);
            const password = user.password;
            const username = user.username;
            const salt = crypto.randomBytes(16).toString('hex'); // Generates a random secret for every User
            const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex'); //Generates a hash for every pw
            MongoORM.insertDocuments('Users', [{ username, hash, salt }], function (response) {
                console.log(response);
            });
    },

    //Checks that password meets certain criteria before sign up and returns an error message (as a promise)
    passwordAddFail: function (user) {
        return new Promise((res, rej) => {
            if (user.password != user.passwordConfirm) {
                rej("Passwords do not match, please try again")
            } else if (user.password.length < 15) {
                rej("Password must be longer than 15 characters")
            } else {
                res("OK")
            } //????? - feel like I could do this better
        })

    },

    //Checks the username/password paid entered by the user
    //This function is probably redundant
    logInUser: async function (user) {
        await Users.validateUser(user);
    },

    //Resolves when chosen username does not already exist in the database
    checkUsernameExists: username => {
        return new Promise((resolve, reject) => {
            MongoORM.findDocuments('Users', { username: username }, function (response) {
                if (response.length === 0) {
                    resolve("OK");
                } else {
                    reject("Sorry, that username is already taken. Please choose another.")
                }
            });
        });
    },

    //Checks existence of username and validity of password upon log in
    validateUser(user) {
        return new Promise((resolve, reject) => {
            MongoORM.findDocuments('Users', { username: user.username }, function (response) {
                if (response.length === 0) {
                    reject("User Not Found")
                } else {
                    const inputHash = crypto.pbkdf2Sync(user.password, response[0].salt, 10000, 512, 'sha512').toString('hex');
                    if (inputHash === response[0].hash){
                        resolve("OK")
                    } else {
                        reject("Incorrect Password")
                    }
                }
            });
        })
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