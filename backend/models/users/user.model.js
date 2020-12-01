const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        fName: String,
        lName: String,
        email: String,
        password: String,
        text: String,
        role: {type: String, enum: ['Traveler', 'Admin']}
    },{collection: 'users'})
);

module.exports = User;
