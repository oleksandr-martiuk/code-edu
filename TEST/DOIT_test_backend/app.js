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
    const { fileName: name, fileExt: ext } = req.query;
    console.log('req.params: ', req.query);

    const filePath = __dirname + `/${name}.${ext}`;
    console.log('File path: ', filePath);

    const strData = await readFile(filePath);

    // TODO: (next step) ---> implement parsing for string for such file
    const result = strData.split('|');

    res.send({ message: result });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
