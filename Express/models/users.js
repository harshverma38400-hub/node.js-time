const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    Firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String
    }
}, { timestamps: true });

const Users = mongoose.model("user", userschema);

module.exports = Users;