import chai from 'chai';
import DB from '../db/connection';
import {AppApi, TestHelper} from './libs/test-helper';

var expect  = require('chai').expect;  // TODO: ?
chai.should();  // TODO: ?

chai.use(require('chai-like'));
chai.use(require('chai-things'));

const testFile = {
    name: 'testfile',
    ext: 'txt'
}

const db = new DB();
const appApi = new AppApi();
const testHelper = new TestHelper(testFile);

describe('FIRST DESCRIPTION:', function(){
    let fileRecords = [];

    before(async function(){
        await db.connect();
        fileRecords = await testHelper.getFileRecords();
    })

    describe('SECOND DESCRIPTION:', function(){
        it('1-st test', function() {
            expect(5).to.eql(5);
        })

        it("'flat_file' includes records for the DataBase", function(){
            expect(fileRecords).to.have.length(18);

            describe("1. The data in 'flat_file' matches the data in PATIENT collection", function(){
                const recordKeys = ['_id', '__v', 'address', 'contacts', 'firstName', 'lastName', 'birthDay', 'consent'];

                fileRecords.forEach(function(record, index){
                    const {firstName, lastName, consent} = record;

                    it(`Element #${index+1} (${firstName + " " + lastName}) in the 'testfile.txt' exists in the DataBase`, async function(){
                        const recordConfigs = {firstName, lastName, consent};
                        const patientRecord = await appApi.getPatientsByParams(recordConfigs);

                        expect(patientRecord).to.has.length(1);
                        // patientRecord.should.have.properties(recordKeys);
                        // expect(patientRecord[0]).to.have.all.keys(...recordKeys);
                        // expect(patientRecord[0]).has.all.keys('_id', '__v', 'address', 'contacts', 'firstName', 'lastName', 'birthDay', 'consent');
                        // expect(patientRecord[0]).includes.all.keys('_id', '__v', 'address', 'contacts', 'firstName', 'lastName', 'birthDay', 'consent', "firstAddress", "secondAddress", "city", "state", "zipCode", "telephoneNumber", "mobilePhone","emailAddress");
                        console.log(JSON.stringify(patientRecord[0]));
                        expect(patientRecord[0]).to.have.keys('_id', '__v', 'address', 'contacts', 'firstName', 'lastName', 'birthDay', 'consent');
                        console.log('----------------------------------------------------------------------')
                        // console.log(JSON.stringify(patientRecord[0]));
                    })
                })
            })



            after(async function(){
                db.close();
            })
        })

        // it('3-st test', function() {
        //     expect(5).to.eql(5);
        // })

        // it('4-st test', function() {
        //     expect(5).to.eql(5);
        // })
    })
})

// ----------------------------------------------------------------------------------------------------

// 1. Verify the data in 'flat_file' matches the data in PATIENT collection
// -----> сравнить информацию из ФАЙЛА с БАЗОЙ ДАННЫХ


// 2. Patient IDs - where "first name" is missing
// -----> показать ID пациентов, у которых 'first name' пропущено


// 3. Patient IDs - "Email address" is missing but consent is Y
// -----> показать ID пациентов, у которых 'Email address' пропущены


// 4. Verify "Emails" were created in "EMAIL" collection for PATIENTS who have "consent"='Y'
// -----> проверить были ли созданы письма в коллекции EMAIL для пациентов, у которых 'consent'='Y'


// 5. Verify the "Email schedule" matches with the above.
// -----> ???
