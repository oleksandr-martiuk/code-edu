function request(url, callback) {
    if (typeof url !== "string") return callback(new Error("Invalid Url"));
    setTimeout(function() {
      console.log(`Requesting ${url}`);
      callback(null, { url: url, status: Math.random() >= 0.5 });
    }, Math.floor(Math.random() * 10));
  }
  
  function checkUrls(arr, requestFn, callback) {
    // write your solution here
  }
  
  checkUrls(
    ["google.com", "codesendbox.io", "castingnetworks.com"],
    request,
    (err, response) => {
      console.log("We are done here !", response);
    }
  );
  checkUrls([1123, "facebook.com"], request, err => {
    console.log("We are done here !", err);
  });
  