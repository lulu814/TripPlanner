const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        text: String,
        role: {type: String, enum: ['Traveler', 'Admin']}
    },{collection: 'users'})
);

module.exports = User;
