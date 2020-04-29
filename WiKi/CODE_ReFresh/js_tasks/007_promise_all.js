// take any number of promises for arguments
function all(args) {
    console.log('================= hello =================');

    return new Promise(resolve => {
        const results = [];

        for (let promise of args) {
            promise.then(result => {
                console.log(`--------------- ${result} ---------------`);
                results.push(result);
                if (results.length === args.length) {
                    resolve(results);
                }
            });
        }
    });
}

(() => {
    const promise1 = new Promise(resolve => setTimeout(() => resolve('first'), 1500));
    const promise2 = new Promise(resolve => resolve("second"));
    
    all([promise1, promise2]).then(fulfill => {
        console.log('*********', fulfill);
    });
})();
