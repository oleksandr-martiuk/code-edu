import chai, {expect} from 'chai';
import should from 'should';
import DB from '../db/connection';
import {AppApi} from './libs/app-api';
import File from '../services/file';
import Patient from '../services/patient';

const file = new File('testfile', 'txt');
const patient = new Patient();
const appApi = new AppApi();
const db = new DB();

// --------------------------------------------------------------------------------------

let patientRecords = [];
const getData = async() => {
    await db.connect();
    patientRecords = await appApi.getAllPatients();
    await db.close();
}

const test = () => {
    // before(async function() {
    //     console.log('(---BEFORE---) patientRecords.length ---> ', patientRecords.length);
    // })
    // after(async () => )
    describe('DESCRIBE #1', function() {
        patientRecords.forEach((record, index) => {
            console.log('(INSIDE) patientRecords.length ---> ', patientRecords.length);
            it(`${index} test:`, () => {
                expect(5).eql(5);
            })
        })
    })
}
    
describe('DESCRIBE #2', function() {
    it('Some another test', () => {
        expect(5).eql(5);
    })
})

(async () => {
    await getData();
    test();
})();

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// describe('FIRST DESCRIBE', () => {
//     console.log('1. patientRecords.length ---> ', patientRecords.length);
//     it('START test', () => {
//         expect(5).eql(5);
//     })

//     describe('DESCRIBE #2', () => {
//         console.log('2. patientRecords.length ---> ', patientRecords.length);
//         patientRecords.forEach((record, index) => {
//             it(`${index} test:`, () => {
//                 expect(5).eql(5);
//             })
//             console.log('7');
//         })
//     })
// })

//-----------------------------------------------------------------------------------------------------------------------------------------------------

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
