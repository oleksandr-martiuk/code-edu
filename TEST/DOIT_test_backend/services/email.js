import EmailModel from '../db/models/email';
import moment from 'moment';

export default class Email {
  async createMultiple(dates, patientEmails, content) {
    const emailRecords = [];

    for (let date of dates) {
      if (!moment(date, "YYYY-MM-DD").isValid()) {
        throw Error("Please provide correct format of date (YYYY-MM-DD)")
      };

      const dateEmails = this.genDateEmails(date, patientEmails, content)
      emailRecords.push(dateEmails);
    }

    const records = emailRecords.flat();

    return await EmailModel.insertMany(records, async (err, emails) => {
      if (err) throw err;
      return emails;
    });
  }

  genDateEmails(date, patientEmails, content) {
    const dateEmails = patientEmails.map(patientEmail => ({
      email: patientEmail.email,
      patientId: patientEmail.patientId,
      date,
      content
    }));

    return dateEmails;
  }
}
