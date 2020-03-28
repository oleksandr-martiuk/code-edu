const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const patientSchema = mongoose.Schema({
    "programIdentifier" : { type: Number, required: true, default: 0 },
    "dataSource"        : { type: String, required: true, default: "" },
    "cardNumber"        : { type: Number, required: true, default: 0 },
    "memberID"          : { type: Number, required: true, default: 0 },

    "firstName"         : { type: String, required: true, default: "" },
    "lastName"          : { type: String, required: true, default: "" },
    "address" : {
        "city"              : { type: String, required: true, default: "" },
        "state"             : { type: String, required: true, default: "" },
        "firstAddress"      : { type: String, required: true, default: "" },
        "secondAddress"     : { type: String, required: true, default: "" },
        "zipCode"           : { type: Number, required: true, default: 0 },
    },
    "contacts": {
        "telephoneNumber"   : { type: String, required: true, default: "" },
        "emailAddress"      : { type: String, required: true, default: "" },
        "mobilePhone"       : { type: Number, required: true, default: 0 },
    },
    "birth"             : { type: String, required: true, default: "" },

    "consent"           : { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model('Patient', patientSchema);

// ------------------------------------------------------------------------------------------------------------------------------

const example = {
    "Program Identifier": 50777445,
    "Data Source": "WEB 3RD PARTY",
    "Card Number": 342121211,
    "Member ID": 43233,
    "First Name": "LOAD",
    "Last Name": "TEST 0",
    "Date of Birth": "04/29/2000",
    "Address 1": "3100 S Ashley Drive",
    "Address 2": "",
    "City": "Chandler",
    "State": "AZ",
    "Zip code": 85286,
    "Telephone number": "",
    "Email Address": "test0@humancaresystems.com",
    "CONSENT": "Y",
    "Mobile Phone": 1234567912
}
