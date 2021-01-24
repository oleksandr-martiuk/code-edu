class Database {
   insert = () => console.log('Inserting record');
   update = () => console.log('Updating record');
   read = () => console.log('Reading record');
   delete = () => console.log('Deleting record');
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Command {
   constructor(database, payloadKey) {
      this.database = database;
      this.payloadKey = payloadKey;
   }
   execute() {
      this.database[this.payloadKey]();
   }
}

class InsertCommand extends Command {
   constructor(database) {
      super(database, 'insert');
   }
}

class UpdateCommand extends Command {
   constructor(database) {
      super(database, 'update');
   }
}

class ReadCommand extends Command {
   constructor(database) {
      super(database, 'read');
   }
}

class DeleteCommand extends Command {
   constructor(database) {
      super(database, 'delete');
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Developer {
   constructor(props) {
      this.insert = props.insert;
      this.update = props.update;
      this.read = props.read;
      this.delete = props.delete;
   }
   insertRecord = () => this.insert.execute();
   updateRecord = () => this.update.execute();
   selectRecord = () => this.read.execute();
   deleteRecord = () => this.delete.execute();
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const db = new Database();
const dev = new Developer({
   insert: new InsertCommand(db),
   update: new UpdateCommand(db),
   read: new ReadCommand(db),
   delete: new DeleteCommand(db)
});

dev.insertRecord();
dev.updateRecord();
dev.selectRecord();
dev.deleteRecord();
