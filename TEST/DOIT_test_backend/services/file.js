import fs from 'fs';
import {root} from '../init-paths';
import {FILE_FOLDER_NAME} from '../config';

export default class File {
    constructor(name, ext) {
        this.filePath =  root + `/${FILE_FOLDER_NAME}` + `/${name}.${ext}`;
    }

    async getLocalData() {
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
}
