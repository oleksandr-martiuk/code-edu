function fastFunction(done) {
   setTimeout(function() {
      done(null, '---- fast Function ----');
   }, 50);
}

function slowFunction(done) {
   setTimeout(function() {
      done(null, '---- slow Function -----');
   }, 1000);
}

function verySlowFunction(done) {
   setTimeout(function() {
      done(null, '---- very slow Function -----');
   }, 3000);
}

function runSequentially(cb) {
   fastFunction((err, data) => {
      if (err) return cb(err);
      console.log(data);

      slowFunction((err, data) => {
         if (err) return cb(err);
         console.log(data);

         verySlowFunction((err, data) => {
            if (err) return cb(err);
            console.log(data);
         });
      });
   });
}

function handleError(err){
   console.log(err.message);
}

runSequentially();
