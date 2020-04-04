function checkMagazine(magazine, note) {
    for (let n = 0; n < note.length; n++) {
        const magLen = magazine.length;
        for (let m = 0; m < magLen; m++) {
            if (note[n] === magazine[m]) {
                magazine.splice(m, 1);
                break;
            }
            if (m === magLen - 1) {
                console.log('No');
                return;
            }
        }
    }
    console.log('Yes');
}
