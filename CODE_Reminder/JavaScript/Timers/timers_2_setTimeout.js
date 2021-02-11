const run = (name, sec) => {
   const timeout = sec * 1000;
   setTimeout(() => {
      console.log(`${sec}. ${name}`);
   }, timeout);
}

const runTimeouts = fArr => {
   for (let [fName, i] of Object.entries(fArr)) {
      setTimeout(run, 0, fName, i);
   }
}

//----------------------------------------------------------------------------------------------------------------------

const fCollection = {
   First: 1,
   Second: 2,
   Third: 3,
}

runTimeouts(fCollection);
