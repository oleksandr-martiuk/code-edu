const fn = (arg, callback) => {
    if (!arg) {
        callback(new Error('Parameter needed'));
        return;
    }
    callback(null, 'Data ' + arg);
    return 'Value';
};

const res = fn('example', (err, data) => {
    if (err) throw err;
    console.dir({ data });
})

console.dir({ res });
