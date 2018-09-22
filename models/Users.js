const crypto = require('crypto');
const MongoORM = require('./MongORM');

//The user controller encrypts passwords for storage in MongoDB, and assigns them a JWT upon log in
const Users = {

    //Checks for any issues with sign up, then encrypts the user password
    addUser: (user) => {
        return new Promise((res, rej) => {
            let error = Users.signupFail(user);
            if (!error){ //This seems like a really dumb way to do this honestly
                const password = user.password;
                const email = user.email;
                const salt = crypto.randomBytes(16).toString('hex'); // Generates a random secret for every User
                const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex'); //Generates a hash for every pw
                MongoORM.insertDocuments('Users', [{ email, hash, salt }], function (response) {
                    console.log(response);
                });
                res("Success");
            } else {
                rej(Error(error));
            }
        });
    },

    //Checks that password meets certain criteria and returns an error message
    signupFail: user => {
        if (user.password != user.passwordConfirm){
            return "Passwords do not match, please try again"
        } else if (user.password.length < 15){
            return "Password must be longer than 15 characters"
        } else {
            return ""
        } //????? - feel like I could do this better
    },

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