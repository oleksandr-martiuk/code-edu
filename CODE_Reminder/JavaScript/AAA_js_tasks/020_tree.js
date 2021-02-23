const assert = require('assert');

// data mock
const rootRes = {
   "sha": "9fb037999f264ba9a7fc6274d15fa3ae2ab98312",
   "url": "https://api.github.com/repos/test/hello-world/trees/9fb037999f264ba9a7fc6274d15fa3ae2ab98312",
   "tree": [
      {
         "path": "file.js",
         "type": "blob",
         "sha": "44b4fc6d56897b048c772eb4087f854f46256132",
      },
      {
         "path": "subdir",
         "type": "tree",
         "sha": "f484d249c660418515fb01c2b9662073663c242e",
      },
   ]
};

const subRes = {
   "sha": "f484d249c660418515fb01c2b9662073663c242e",
   "url": "https://api.github.com/repos/test/hello-world/trees/f484d249c660418515fb01c2b9662073663c242e",
   "tree": [
      {
         "path": "file.js",
         "sha": "44b4fc6d56897b048c772eb4087f854f46256132",
         "type": "blob",
      },
   ]
};

const dataForCheck = {
   "sha": "9fb037999f264ba9a7fc6274d15fa3ae2ab98312",
   "tree": [
      {
         "path": "file.js",
         "sha": "44b4fc6d56897b048c772eb4087f854f46256132",
         "type": "blob",
      },
      {
         "path": "subdir",
         "type": "tree",
         "sha": "f484d249c660418515fb01c2b9662073663c242e",
         "tree": [
            {
               "path": "file.js",
               "sha": "44b4fc6d56897b048c772eb4087f854f46256132",
               "type": "blob",
            },
         ]
      },
   ]
};

// So in general we have API, which returns us repository structure with files
// and folders.
//
// Need to create api mock for the root response and sub response, and getData function
// which will carry out requests to API, and build data object
// with correct structure, as dataForCheck. Please note that nesting in folders
// can be deeper. For example:
//
// root/
//  file
//  /subfolder
//    file
//    /subfolder
//    ...

async function api(sha) {
   if (sha === 'f484d249c660418515fb01c2b9662073663c242e') {
      return subRes;
   }
   return rootRes;
}

/**
  * Theirs version o_O
  */
// async function getData(ite, results) {
//    const response = await api(item.sha);
//
//    for (const treeItem of response.tree) {
//       if (treeItem.type === 'tree') {
//          const res = await api(treeItem.sha);
//       }
//       else if (treeItem.type === 'blob') {
//
//       }
//    }
//
//    return getData();
// }
//
// // test
//
// async function launchTest() {
//    const data = await getData();
//
//    assert.deepStrictEqual(data, dataForCheck);
//
//    console.log('done');
// }
//
// launchTest();

/************************************************* My version *********************************************************/

async function getData(item) {
   const data = await api(item.sha);
   const treeItem = data.tree.find(item => (item.type === 'tree'));
   if (treeItem) treeItem.tree = await getData(treeItem);
   return data;
}

async function launchTest() {
   const data = await getData({ sha: '9fb037999f264ba9a7fc6274d15fa3ae2ab98312' });
   // assert.deepStrictEqual(data, dataForCheck); // TODO: uncomment test
   return data;
}

launchTest().then(res => console.log(res));
