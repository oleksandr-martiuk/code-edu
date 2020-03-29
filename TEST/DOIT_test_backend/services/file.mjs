import fs from 'fs';

export default class File {
    async uploadData (filePath) {
        console.log('FilePath: ', filePath);

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

    getParsedData (flashData) {
        // TODO: (Error) Add error-handler when data of patient does not exist

        const dataRows = flashData.split('\n');
        const records = [];
    
        for (let i = 1; i < dataRows.length; i++) {
            const patient = {
                "firstName"         : row[4],
                "lastName"          : row[5],
                "birth"             : row[6] || "",
                "memberID"          : row[3],
                "address" : {
                    "city"              : row[9] || "",
                    "state"             : row[10] || "",
                    "firstAddress"      : row[7] || "",
                    "secondAddress"     : row[8] || "",
                    "zipCode"           : row[11] || null,
                },
                "contacts": {
                    "telephoneNumber"   : row[12] || "",
                    "emailAddress"      : row[13],
                    "mobilePhone"       : row[15] || "",
                },
                "consent"           : row[14] || "N"
            }

            records.push(patinet);
        }

        console.log(records);
    
        return records;
    }
}
