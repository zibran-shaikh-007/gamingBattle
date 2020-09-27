const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({

    googleId: {
        type: Number,
        required: true,
        trim:true
    },
    imageUrl: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    /* familyName:{
        type: String,
        required: true
    },
    givenName:{
        type: String,
        required: true
    }, */
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: null
    },


})

module.exports = mongoose.model('Login', loginSchema)