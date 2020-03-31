import PatientModel from '../../db/models/patient';
import EmailModel from '../../db/models/email';

export class AppApi {
    getAllPatients = async () => (await PatientModel.find());
    getAllEmails = async () => (await EmailModel.find());
}
