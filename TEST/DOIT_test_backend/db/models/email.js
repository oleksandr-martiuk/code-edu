import {Schema, model} from 'mongoose';

const emailSchema = Schema({
    "email"     : { type: String, required: true },
    "date"      : { type: Date, required: true },
    "content"   : { type: String, default: "" }
});

export default model('Email', emailSchema);

// ---> 'PATIENT' ----> must be unique
// ---> create relations between 'PATIENT' & 'EMAIL'
