const mongoose = require("mongoose");

  // user

const userSchema = new mongoose.Schema({
    login: String,
    password: String,
  });
  
  // profile
const profileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: String,
  });
  
  // credentials
const credentialsSchema = new mongoose.Schema({
    address: String,
    phone: String,
    email: String,
  });

module.exports = mongoose.model("Usuario", UserSchema, "users")

const User = mongoose.model('User', userSchema, );
const Profile = mongoose.model('Profile', profileSchema, );
const Credentials = mongoose.model('Credentials', credentialsSchema, );

module.exports = {
  User,
  Profile,
  Credentials,
};