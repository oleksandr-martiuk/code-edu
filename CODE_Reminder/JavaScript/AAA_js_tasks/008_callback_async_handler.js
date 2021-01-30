// function request(url, callback) {
//    if (typeof url !== "string") return callback(new Error("Invalid Url"));
//    setTimeout(function () {
//       console.log(`Requesting ${url}`);
//       callback(null, {url: url, status: Math.random() >= 0.5});
//    }, Math.floor(Math.random() * 10));
// }
//
// function checkUrls(arr, requestFn, callback) {
//    // write your solution here
// }
//
// checkUrls(
//    ["google.com", "codesendbox.io", "castingnetworks.com"],
//    request,
//    (err, response) => {
//       console.log("We are done here !", response);
//    }
// );
// checkUrls([1123, "facebook.com"], request, err => {
//    console.log("We are done here !", err);
// });

//----------------------------------------------------------------------------------------------------------------------

function request(url, callback) {
   if (typeof url !== "string") return callback(new Error(`Invalid Url "${url}"`));

   const randNum = Math.floor(Math.random() * 10000);
   setTimeout(function () {
      callback(null, { url: url, timeout: randNum });
   }, randNum);
}
function checkUrls(arr, requestFn, callback) {
   arr.forEach(url => setTimeout(([url, cb]) => {
      console.log(`Requesting ${url}`);
      requestFn(url, cb);
   },0, [url, callback]));
}
const cb = (err, response) => {
   if (err) console.log(`ERROR: ${err.message}`);
   else if (response) console.log(">     We are done here: ", response);
}

//----------------------------------------------------------------------------------------------------------------------

const links = {
   first: ["blah.com", "qwerty123.io", "some-link.com"],
   second: [1123, "who-you-are.com"],
}

checkUrls(links.first, request, cb);
checkUrls(links.second, request, cb);
