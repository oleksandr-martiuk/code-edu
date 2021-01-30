function fastFunction(done) {
   setTimeout(function() {
      done(null, '---- fastFunction ----');
   }, 500);
}

function slowFunction(done) {
   setTimeout(function() {
      done(null, '---- slowFunction -----');
   }, 2000);
}

function runSequentially(callback) {
   fastFunction((err, data) => {
      if (err) return callback(err);
      console.log(data);

      slowFunction((err, data) => {
         if (err) return callback(err);
         console.log(data);
      });
   });
}

runSequentially();
