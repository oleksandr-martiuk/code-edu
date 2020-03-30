const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const patientSchema = Schema({
    "firstName" : { type: String, default: "" },
    "lastName"  : { type: String, default: "" },
    "birth"     : { type: Date, default: null },
    "address" : {
        "firstAddress"      : { type: String, default: "" },
        "secondAddress"     : { type: String, default: "" },
        "city"              : { type: String, default: "" },
        "state"             : { type: String, default: "" },
        "zipCode"           : { type: Number, default: null },
    },
    "contacts": {
        "telephoneNumber"   : { type: String, default: "" },
        "mobilePhone"       : { type: String, default: "" },
        "emailAddress"      : { type: String, default: "" }
    },
    "consent"   : { type: Boolean, default: false }
});

export default model('Patient', patientSchema);
