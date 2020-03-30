import EmailModel from '../db/models/email';

export default class Email {
  async createMultiple(dates, emails, content) {
    const emailRecords = [];

    for (let i = 0; i < dates.length; i++) {
      const date = dates[i];
      const dateEmails = this.genDateEmails(date, emails, content)
      emailRecords.push(dateEmails);
    }

    const records = emailRecords.flat();

    // TODO: could be added Error handler for record already exists

    await EmailModel.insertMany(records, async (err) => {
      if (err) throw err;
      return 'Emails created';
    });
  }

  genDateEmails(date, emails, content) {
    const dateEmails = [];

    for (let y = 0; y < emails.length; y++) {
      const email = emails[y];
      const record = { email, content, date };
      dateEmails.push(record);
    }

    return dateEmails;
  }
}
