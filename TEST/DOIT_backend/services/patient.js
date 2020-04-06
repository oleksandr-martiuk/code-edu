import PatientModel from '../db/models/patient';

export default class Patient {
    parseRecords (strData) {
        try {
            const dataRows = strData.split('\n');
            const records = [];

            for (let i = 1; i < dataRows.length; i++) {
                const row = dataRows[i].split('|');
                if (row.length < 15) break;

                const patient = {
                    "firstName"         : row[4],
                    "lastName"          : row[5],
                    "birthDay"          : row[6],
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

    async createMultiple(patients) {
        return await PatientModel.insertMany(patients, async (err, result) => {
            if (err) throw err;
            return 'Patients created';
        });
    }

    async getByParams(params = {}) {
        const patients = await PatientModel.find(params, async (err, result) => {
            if (err) throw err;
            return result;
        });

        return patients;
    }

    getPatientEmails(patients) {
        const patientEmails = patients
            .filter(patient => !!patient.contacts.emailAddress)
            .map(patient => {
                return {
                    email: patient.contacts.emailAddress,
                    patientId: patient._id
                }
            });

        return patientEmails;
    }
}
