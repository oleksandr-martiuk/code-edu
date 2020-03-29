import Router from 'express';
export const router = Router();

import File from '../../services/file';

router.post('/patients', async (req, res, next) => {
    try {
        const folderName = 'flash_files';
        const { fileName } = req.query;
        const filePath =  __dirname + `/${folderName}` + `/${fileName}.txt`;

        const file = new File();

        const fileData = await file.uploadData(filePath);
        console.log('-----------------------------------------------------------------------------------------------');
        console.log('-------------> __dirname:  ', __dirname);
        console.log('-------------> __filename:  ', __filename);
        console.log('-------------> fileData:  ', fileData);
        console.log('-----------------------------------------------------------------------------------------------');
        const data = file.getParsedData(fileData)

        // TODO #02: connect to DataBase
        // TODO #03: create model for saving data to MongoDB
        // TODO #04: save data
        // TODO #05: add TESTS for checking whether data exists by TEST-points

        res.send({ message: data });
    } catch (error) {
        return next(error);
    }
});
