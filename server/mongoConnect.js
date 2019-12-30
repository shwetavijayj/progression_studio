var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Progress-studio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var dbConnect = mongoose.connection;
if (!dbConnect) {
  console.log('Sorry Connection is not established');
  return;
}

/// Schema creation

var userSchema = mongoose.Schema({
  UserId: String,
  userName: String,
  password: String
});

var loginStatusSchema = mongoose.Schema({
  LoginStatusId: String,
  UserName: String,
  DateTime: Date,
  IPAddress: String
});

var tokenSchema = mongoose.Schema({
  UserId: String,
  token: String
});

var userMediaSchema = mongoose.Schema({
  UserId: String,
  invitedFriends: Object,
  friends: Object,
  recommended: Object,
  favourites: Object,
  playlists: Object,
  reviews: Object
});

var generSchema = mongoose.Schema({
  genreId: String,
  genreName: String
});

var artistSchema = mongoose.Schema({
  artistId: String,
  artistName: String
});

var videoTypeSchema = mongoose.Schema({
  typeId: String,
  typeName: String
});

var videoDetails = mongoose.Schema({
  videoId: String,
  title: String,
  length: Number,
  genreId: String,
  partialPath: String,
  ratings: Number,
  typeId: String,
  artists: Array
});

module.exports = {
  mongoose,
  userSchema,
  tokenSchema,
  loginStatusSchema,
  userMediaSchema,
  generSchema,
  artistSchema,
  videoTypeSchema,
  videoDetails
};
