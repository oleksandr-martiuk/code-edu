const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const emailSchema = Schema({
    "email"     : { type: String, required: true },
    "date"      : { type: Date, required: true },
    "content"   : { type: String, default: "" }
});

export default model('Email', emailSchema);
