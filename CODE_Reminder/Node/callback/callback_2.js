function getMsg(arg, callback) {
   return callback(arg);
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const cb = (name) => `Run ${name}, run!`;

const message = getMsg('Lola', cb);
console.log(message);
