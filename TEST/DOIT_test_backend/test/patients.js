import chai, {expect} from 'chai';

import appApi from './libs/appApi';
// const appApi = require('appApi');

describe('AppTests', async () => {
    before(async () => {
        appApi.doSome();
        // const allPatients = await patientService.getByParams();
        // console.log(allPatients);
    });

    it('MATCH flash-file with database records', async () => {
        // 1. Verify the data in 'flat_file' matches the data in PATIENT collection
        // -----> сравнить информацию из ФАЙЛА с БАЗОЙ ДАННЫХ

        
    });
})

// 2. Patient IDs - where "first name" is missing
// -----> показать ID пациентов, у которых 'first name' пропущено


// 3. Patient IDs - "Email address" is missing but consent is Y
// -----> показать ID пациентов, у которых 'Email address' пропущены


// 4. Verify "Emails" were created in "EMAIL" collection for PATIENTS who have "consent"='Y'
// -----> проверить были ли созданы письма в коллекции EMAIL для пациентов, у которых 'consent'='Y'


// 5. Verify the "Email schedule" matches with the above.
// -----> ???
