const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    emailAddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Posts', PostSchema);