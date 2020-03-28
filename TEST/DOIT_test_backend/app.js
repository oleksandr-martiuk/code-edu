const express = require('express');
const app = express()
const port = 3000

const fs = require('fs');

// TODO: such code could be rewrote to the TypeScript
// TODO: add logger (for error logging for example)

app.get('/', (req, res) => {
    const response = {
        message: 'Hello World!'
    };

    res.send(response);
})

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

app.post('/upload', async (req, res) => {
    const folderName = 'flash_files';
    const { fileName } = req.query;
    const filePath =  __dirname + `/${folderName}` + `/${fileName}.txt`;

    const strData = await readFile(filePath);

    // TODO #01: (next step) ---> implement parsing for string for such file
    const result = strData.split('|');

    // TODO #02: connect to DataBase
    // TODO #03: create model for saving data to MongoDB
    // TODO #04: save data
    // TODO #05: add TESTS for checking whether data exists by TEST-points

    // just testing comment

    res.send({ message: result });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
