import PatientModel from '../../db/models/patient';
import EmailModel from '../../db/models/email';
import File from '../../services/file';
import Patient from '../../services/patient';

export class AppApi {
    getPatientsByParams = async (params) => {
        return await PatientModel.find(params, function(err, result) {
            if (err) throw err;
            return result;
        });
    };
    getAllEmails = async () => (await EmailModel.find());
}

export class TestHelper {
    constructor({name = 'example', ext = 'txt'}) {
        this.file = new File(name, ext);
        this.patientService = new Patient();
    }
    getFileRecords = async () => {
        const fileData = await this.file.read();
        const fileRecords = this.patientService.parseRecords(fileData);

        return fileRecords;
    }
}
