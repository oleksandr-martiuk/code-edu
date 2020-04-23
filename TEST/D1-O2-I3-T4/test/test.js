import {expect} from 'chai';
import moment from 'moment';
import DB from '../db/connection';
import {AppApi, TestHelper} from './libs/helper';

const testFile = {
    name: 'testfile',
    ext: 'txt'
}
const testDates = [
    "2020-04-01",
    "2020-04-02",
    "2020-04-03",
    "2020-04-04",
    "2020-04-05"
]

const db = new DB();
const appApi = new AppApi();
const testHelper = new TestHelper(testFile);

describe('FIRST DESCRIPTION:', function(){
    let fileRecords = [],
        allEmails = [],
        emptyNamePatients = [],
        emptyEmailPatients = [],
        patientEmails = [];

    before(async function(){
        await db.connect();
        fileRecords = await testHelper.getFileRecords();

        emptyNamePatients = await appApi.getPatientsByParams({firstName: ""});
        emptyEmailPatients = await appApi.getPatientsByParams({'contacts.emailAddress': {$in: ""}, consent: true});
        patientEmails = await appApi.getPatientEmails();

        allEmails = await appApi.getEmailsByParams();
    })

    describe('DOIT test task:', function(){

        it("'flat_file' includes records for the DataBase", function(){
            expect(fileRecords).to.have.length(18);

            describe("1. The data in 'flat_file' matches the data in PATIENT collection", function(){
                const recordKeys = ['_id', '__v', 'address', 'contacts', 'firstName', 'lastName', 'birthDay', 'consent'];

                fileRecords.forEach(function(record, index){
                    const {firstName, lastName, birthDay} = record;

                    it(`Record of the element #${index+1} (${firstName + " " + lastName}) from the '${testFile.name}.${testFile.ext}' exists in the DataBase`, async function(){
                        const patientRecord = await appApi.getPatientsByParams({firstName, lastName, birthDay});
                        expect(patientRecord).to.has.length(1);
                    })
                })
            })

            after(async function(){
                db.close();
            })
        })
    })

    describe('...', function(){
        it('...', function() {

            describe('2. Patient IDs where "first name" is missing:', function(){
                emptyNamePatients.forEach(record => {
                    it(`Patient (ID='${record._id}') has an empty "First Name"`, function(){
                        expect(record.firstName).to.be.empty;
                    })
                })
            })

            describe('3. Patient IDs where "Email address" is missing but consent is Y:', function(){
                emptyEmailPatients.forEach(record => {
                    it(`Patient (ID='${record._id}') doesn't have an "Email Address" but consent is Y`, function(){
                        expect(record.contacts.emailAddress).to.be.empty;
                        expect(record.consent).is.true;
                    })
                })
            })

            describe(`4. "Emails" were created in "EMAIL" collection for PATIENTS who have "consent"='Y'`, function(){
                patientEmails.forEach(patientRecord => {
                    it(`Emails for the patient (ID='${patientRecord._id}') where created in the DataBase`, function(){
                        expect(patientRecord.emailData).has.length.above(0);
                    })
                })
            })

            describe(`5. "Test dates" matches with the created for the patients`, function(){
                patientEmails.forEach(patientRecord => {
                    const emailDates = patientRecord.emailData.map(data => moment(data.date).format("YYYY-MM-DD"));
                    it(`Emails dates for the patient (ID='${patientRecord._id}') matche with created in the DataBase`, function(){
                        expect(emailDates).to.eql(testDates);
                    })
                })
            })

        })
    })

})
