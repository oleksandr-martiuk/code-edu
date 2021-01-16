const DB = {
   people: [
      { id: 1, name: 'Igor', surname: 'Valerievich', age: 88 },
      { id: 2, name: 'Anna', surname: 'Igorevna', age: 42 },
      { id: 3, name: 'Tom', surname: 'Soyer', age: 27 },
      { id: 4, name: 'Joe', surname: 'Black', age: 42 },
   ]
}

class MyApi {
   constructor() {
      this.db = DB;
   }
   getPerson({ url, body }) {
      const urlSlash = url.split("/");
      const len = urlSlash.length - 1;
      const tableName = urlSlash[len];
      const result = this.db[tableName] && this.db[tableName].find(item => item.id === body.props.id);

      if (result) return result;
      else throw new Error(`Table "${tableName}" does not contain person with ID=${body.props.id}`);
   }
}

class MyProxyApi {
   constructor() {
      this.api = new MyApi();
   }
   getPerson({ url, body }) {
      try {
         if (!url) throw new Error("URL doesn't exist");
         if (!url.startsWith('https')) throw new Error("Request is not secure");
         if (body.method !== 'GET') throw new Error("Wrong method name");

         return this.api.getPerson({url, body});
      } catch(e) {
         console.log('ERROR: ', e.message);
         return '';
      }
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const options = {
   url: 'https://www.yoshi155.com/people',
   body: {
      method: 'GET',
      props: { id: 3 }
   }
}
const api = new MyProxyApi();
const result = api.getPerson(options);
console.log(result);
