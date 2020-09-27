const mongoose = require("mongoose");

const tourformSchema = new mongoose.Schema({

    youtube: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true

    },
    age: {
        type: Number,
        required: true,
        trim: true,


    },
    mobile: {
        type: Number,
        required: true,
        trim: true,
        min: 10

    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },


    playerId1: {
        type: Number,
        required: true
    },
    playerName1: {
        type: String,
        required: true
    },
    playerId2: {
        type: Number,
        required: true
    },
    playerName2: {
        type: String,
        required: true
    },
     playerId3: {
        type: Number,
        required: true
    },
    playerName3: {
        type: String,
        required: true
    },
     playerId4: {
        type: Number,
        required: true
    },
    playerName4: {
        type: String,
        required: true
    },
     playerId5: {
        type: Number,
        required: true
    },
    playerName5: {
        type: String,
        required: true
    },
     playerId6: {
        type: Number,
        required: true
    },
    playerName6: {
        type: String,
        required: true
    },
    selectedDate: {
        type: String,
        required: true
    },
    selectedTime: {
        type: String,
        required: true
    },
    





    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: null
    },


})

module.exports = mongoose.model('Form', tourformSchema)