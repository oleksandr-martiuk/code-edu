// TODO: (improvement) such code could be rewrote to the TypeScript
// TODO: (improvement) add logger (for error logging for example)

var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');

const fs = require('fs');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}); 

app.get('/', (req, res) => {
    const response = {
        message: 'Hello World!'
    };

    res.send(response);
})

app.post('/upload', async (req, res) => {
    const folderName = 'flash_files';
    const { fileName } = req.query;
    const filePath =  __dirname + `/${folderName}` + `/${fileName}.txt`;

    const strData = await readFile(filePath);

    // TODO #01: (next step) ---> implement parsing for string for such file
    // const result = strData.split('|');
    const data = getParsedData(strData)

    // TODO #02: connect to DataBase
    // TODO #03: create model for saving data to MongoDB
    // TODO #04: save data
    // TODO #05: add TESTS for checking whether data exists by TEST-points

    // just testing comment

    res.send({ message: data });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// ---------------------------------------------------------------------------
// -------------------------------- SERVICES ---------------------------------
// ---------------------------------------------------------------------------

/**
 * Method for reading file
 * @param {string} filePath
 */
const readFile = async (filePath) => {
    try {
        const readStream = fs.createReadStream(filePath);

        return new Promise((resolve, reject) => {
            const chunks = [];

            readStream
                .on('data', chunk => chunks.push(chunk))
                .on('error', reject)
                .on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
        });
    } catch(err) {
        // TODO: such error should be improved
        console.log('Something wrong with file reading!');
        return err.statusCode;
    }
}

/**
 * Parsing data
 * @param {string} flashData 
 */
const getParsedData = (flashData) => {
    const parsedData = flashData.split('\n');
    var arr = [{ name: 'Star Wars' }, { name: 'The Empire Strikes Back' }];
    Movies.insertMany(arr, function(error, docs) {});
    return parsedData;
}

{
    "programIdentifier" : arr[0] || 0,
    "dataSource"        : arr[1] || "",
    "cardNumber"        : arr[2] || 0,
    "memberID"          : arr[3] || 0,
    "firstName"         : arr[4] || "",
    "lastName"          : arr[5] || "",
    "address" : {
        "city"              : arr[9] || "",
        "state"             : arr[10] || "",
        "firstAddress"      : arr[7] || "",
        "secondAddress"     : arr[8] || "",
        "zipCode"           : arr[11] || 0,
    },
    "contacts": {
        "telephoneNumber"   : arr[12] || "",
        "emailAddress"      : arr[13] || "",
        "mobilePhone"       : arr[15] || 0,
    },
    "birth"             : arr[6] || "",
    "consent"           : arr[14] || "Y"
}
