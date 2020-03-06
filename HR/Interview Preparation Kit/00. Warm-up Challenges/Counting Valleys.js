// Complete the countingValleys function below.
function countingValleys(n, s) {
    let [valleyCount, currState, prevState] = [0, 0, 0];
    for (let i = 0; i < s.length; i++) {
        prevState = currState;
        currState += (s[i] === 'D') ? -1 : 1;
        if (currState === 0 & prevState < currState) {
            valleyCount++;
        }
    }

    return valleyCount;
}
