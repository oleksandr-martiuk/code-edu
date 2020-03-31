import {Router} from 'express';
export const router = Router();

import File from '../../services/file';
import Patient from '../../services/patient';

// TODO: should not create the same PATIENTS in the DataBase (by properties for example: firstName, lastName, email)
router.post('/', async (req, res, next) => {
    // TODO: add error handling
    try {
        const { fileName } = req.query;
        const file = new File(fileName, 'txt');
        const patient = new Patient();

        const fileData = await file.read();
        const records = patient.parseRecords(fileData)

        await patient.createMultiple(records);

        res.statusCode = 201;
        res.send({ message: records });
    } catch (error) {
        return next(error);
    }
});
