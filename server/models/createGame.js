const mongoose = require('mongoose');

const creatingGameSchema = mongoose.Schema({
    
    name: {
        type: String,
       required: true
    },
    image: {
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

module.exports = mongoose.model('Game', creatingGameSchema);