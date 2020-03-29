import fs from 'fs';
import {root} from '../../init-paths'
import {FLASH_FOLDER_NAME} from '../../config'

export default class File {
    constructor(name, ext) {
        this.filePath =  root + `/${FLASH_FOLDER_NAME}` + `/${name}.${ext}`;
    }

    async getPatientRecords () {
        const fileData = await this.getLocalData();
        const records = this.getParsedPatients(fileData);

        return records;
    }

    async getLocalData () {
        try {
            const readStream = fs.createReadStream(this.filePath);
    
            return new Promise((resolve, reject) => {
                const chunks = [];
    
                readStream
                    .on('data', chunk => chunks.push(chunk))
                    .on('error', reject)
                    .on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
            });
        } catch(err) {
            console.log('Error in reading of the patients local file');
            return err.statusCode;
        }
    }

    getParsedPatients (patientStrs) {
        // TODO: (Error) Add error-handler when data of patient does not exist
        try {
            const dataRows = patientStrs.split('\n');
            const records = [];

            for (let i = 1; i < dataRows.length; i++) {
                const row = dataRows[i].split('|');
                if (row.length < 15) break;

                const patient = {
                    "firstName"         : row[4],
                    "lastName"          : row[5],
                    "birth"             : row[6],
                    "address" : {
                        "firstAddress"      : row[7],
                        "secondAddress"     : row[8],
                        "city"              : row[9],
                        "state"             : row[10],
                        "zipCode"           : +row[11],
                    },
                    "contacts": {
                        "telephoneNumber"   : row[12],
                        "emailAddress"      : row[13],
                        "mobilePhone"       : row[15],
                    },
                    "consent"           : (row[14] == 'Y') ? true : false
                }

                records.push(patient);
            }
    
            return records;
        } catch(err) {
            err.message = 'Error in parsing data from the file of the patient records';
            throw err;
        }        
    }
}
