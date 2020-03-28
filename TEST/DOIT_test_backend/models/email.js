const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const emailSchema = mongoose.Schema({
    "id": ObjectId,
});

module.exports = mongoose.model('Email', emailSchema);
