import { Schema, model } from 'mongoose';
const { ObjectId } = Schema.Types;

const emailSchema = Schema({
    "email"         : { type: String, required: true },
    "date"          : { type: Date, required: true },
    "content"       : { type: String, default: "" },
    "patientId"     : { type: ObjectId, require: true, ref: "Patient" }
});

export default model('Email', emailSchema);
