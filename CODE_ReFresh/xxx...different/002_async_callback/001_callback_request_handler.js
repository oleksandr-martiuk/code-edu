function request(url, callback) {
  if (typeof url !== "string")
    return callback(new Error("Invalid Url"));

  setTimeout(function() {
    console.log(`Requesting ${url}`);
    const status = Math.random() >= 0.5;
    callback(null, { url, status });
  }, Math.floor(Math.random() * 5));
}

function cbFun() {
  
}

function checkUrls(arr, requestFn, finCallback) {
  // write your solution here
  console.log('1.');
  const amount = arr.length;
  for (let i = 0; i < arr.length; i++) {
    reqCb(arr, amount, );
  }
  console.log('');
}
  
checkUrls(
  ["https://first.com", "https://second.com"],
  request,
  (err, response) => console.log("We are done here !", response)
);

// checkUrls(
//   ["https://first.com", "https://second.com"],
//   request,
//   (err) => console.log("We are done here !", err)
// );
