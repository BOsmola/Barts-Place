const Datastore = require("nedb");
const bcrypt = require('bcrypt');
const saltRounds = 12;
class UserDAO {
constructor(dbFilePath) {
    if (dbFilePath) {
        //embedded
        this.db = new Datastore({ filename: dbFilePath,
            autoload: true });
    } else {
        //in memory
        this.db = new Datastore();
    }
 }
// for the demo the password is the bcrypt of the user name
init() {
    this.db.insert({
        user: 'admin',
        password:
        '$2a$12$2fuCW5OGnwmGySvcvonqgeATLPEQRZpdTHeMFFFs/BtpukGFib3KG'
    });
    return this;
 }

create(username, password) {
    const that = this;
    bcrypt.hash(password, saltRounds).then(function(hash) {
    var entry = {
        user: username,
        password: hash,
    };
    that.db.insert(entry, function (err) {
    if (err) {
        console.log("Can't insert user: ", username);
    }
    });
});
}
lookup(user, cb) {
    this.db.find({'user': user}, function (err, entries) {
        if (err) {
            return cb(null, null);
        } else {
            if (entries.length == 0) {
                return cb(null, null);
            }
            return cb(null, entries[0]);
        }
    });
}
}
const dao = new UserDAO();
dao.init();
module.exports = dao;