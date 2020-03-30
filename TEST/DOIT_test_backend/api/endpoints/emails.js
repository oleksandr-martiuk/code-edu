import {Router} from 'express';
export const router = Router();

import Email from '../../services/email';
import Patient from '../../services/patient';

const emailService = new Email();
const patientService = new Patient();

router.post('/', async (req, res, next) => {
    try {
        const { dates, template } = req.body;

        const patients = await patientService.getByParams({consent: true});
        const emails = patientService.getEmails(patients);

        await emailService.createMultiple(dates, emails, template);

        res.statusCode = 201;
        res.send({ message: 'Emails created' });
    } catch (error) {
        return next(error);
    }
});
