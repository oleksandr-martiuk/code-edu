function jumpingOnClouds(c) {
    let [steps, i] = [0, 0];
    while (i < c.length - 1) {
        steps++;
        if (c[i+2] === 0) {
            i += 2;
            continue;
        }
        i++;
    }
    return steps;
}
