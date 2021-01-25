const fs = require('fs');

function someAsyncOperation (callback) {
   // Предположим, это завершится через 95мс
   fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(function () {
   const delay = Date.now() - timeoutScheduled;
   console.log(delay + "ms have passed since I was scheduled");
}, 1000);

// выполнить someAsyncOperation, требующую 95мс для завершения
someAsyncOperation(function () {
   const startCallback = Date.now();

   // выполнить что-то, что займёт 10мс...
   while (Date.now() - startCallback < 10) {
      // ничего не делать
   }
});
