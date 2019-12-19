var mongoose = require("mongoose");

mongoose.Promise = global.Promise;


mongoose.connect(
    "mongodb://localhost/Progress-studio",
    { useNewUrlParser: true }
);


var dbConnect = mongoose.connection;
if (!dbConnect) {
    console.log("Sorry Connection is not established");
    return;
}


/// Schema creation
var roleSchema = mongoose.Schema({
    roleId: Number,
    roleName: String
});

var userSchema = mongoose.Schema({
    UserId: String,
    UserName: String,
    Password: String,
    roleId: Number
})

var loginStatusSchema = mongoose.Schema({
    LoginStatusId: String,
    UserName: String,
    DateTime: Date,
    IPAddress: String
})

var tokenSchema = mongoose.Schema({
    UserId: String,
    token: String
})

module.exports = {
    mongoose,
    roleSchema,
    userSchema,
    tokenSchema,
    loginStatusSchema
}