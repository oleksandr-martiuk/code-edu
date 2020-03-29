const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const patientSchema = mongoose.Schema({
    "patientID"     : { type: ObjectId, index: true, required: true, auto: true },

    "firstName"     : { type: String, required: true },
    "lastName"      : { type: String, required: true },
    "birth"         : { type: String, default: "" },
    "address" : {
        "firstAddress"      : { type: String, default: "" },
        "secondAddress"     : { type: String, default: "" },
        "city"              : { type: String, default: "" },
        "state"             : { type: String, default: "" },
        "zipCode"           : { type: Number, default: 0 },
    },
    "contacts": {
        "telephoneNumber"   : { type: String, default: "" },
        "emailAddress"      : { type: String, default: "" },
        "mobilePhone"       : { type: String, default: "" },
    },
    "consent"           : { type: Boolean, default: false }
});

// module.exports = mongoose.model('Patient', patientSchema); // TODO: remove it
export default Patient = mongoose.model('Patient', patientSchema);
