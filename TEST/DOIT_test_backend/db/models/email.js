const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const emailSchema = mongoose.Schema({
    "emailID": {
        type: ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    "emailAddress"      : { type: String, required: true },
    "content"           : { type: String, default: "" }
});

// TODO: should try to update 'module.export' ---> to 'exports'
module.exports = mongoose.model('Email', emailSchema);
