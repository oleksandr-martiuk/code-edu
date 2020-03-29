const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// TODO #1: improve Schema by 'required', 'unique' etc.
// TODO #2: add types to the properties

const patientSchema = mongoose.Schema({
    "patientID"         : { type: ObjectId, index: true, required: true, auto: true },
    "firstName"         : { type: String, required: true },
    "lastName"          : { type: String, required: true },

    "address" : {
        "city"              : { type: String, default: "" },
        "state"             : { type: String, default: "" },
        "firstAddress"      : { type: String, default: "" },
        "secondAddress"     : { type: String, default: "" },
        "zipCode"           : { type: String, default: "" },
    },
    "contacts": {
        "telephoneNumber"   : { type: String, default: "" },
        "emailAddress"      : { type: String, default: "" },
        "mobilePhone"       : { type: String, default: "" },
    },
    "birth"             : { type: String, default: "" },
    "consent"           : { type: String, default: "N" },

    "memberID"          : { type: String, default: "" },
    "programIdentifier" : { type: String, default: "" },
    "dataSource"        : { type: String, default: "" },
    "cardNumber"        : { type: String, default: "" }
});

Movies.insertMany(arr, function(error, docs) {});

module.exports = mongoose.model('Patient', patientSchema);
