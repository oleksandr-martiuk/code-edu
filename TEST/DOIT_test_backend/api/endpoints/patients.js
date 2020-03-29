import {Router} from 'express';
export const router = Router();

import File from '../../services/patient/file';

router.post('/', async (req, res, next) => {
    console.log(`I'm in the /PATIENTS endpoints`);

    try {
        const { fileName } = req.query;
        const file = new File(fileName, 'txt');
        const records = await file.getPatientRecords();

        // TODO #03: create model for saving data to MongoDB
        // TODO #04: save data
        // TODO #05: add TESTS for checking whether data exists by TEST-points

        res.send({ message: records });
    } catch (error) {
        return next(error);
    }
});
