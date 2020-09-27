const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 10
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: null
    },
    deletedDate: {
        type: Date,
        default: null
    }
})

module.exports = mongoose.model('Admin', adminSchema);