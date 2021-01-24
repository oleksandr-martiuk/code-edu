import {Router} from 'express';
export const router = Router();

import File from '../../services/file';
import Patient from '../../services/patient';

router.post('/', async (req, res, next) => {
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
