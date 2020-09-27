const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({

    image: {
        type: String,
        required: true
    },
    games: {
        type: String,
        required: true
    },
    prizepool: {
        type: [{
            rank: {
                type: String,
                required: true
            },
            prize: {
                type: Number,
                required: true
            }
        }]
    },
    totalPrize: {
        type: Number,
        required: true
    },
    totalParticipant: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    rules: {
        type: String,
        required: true
    },
    platform: {
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

module.exports = mongoose.model("Tournaments", tournamentSchema)