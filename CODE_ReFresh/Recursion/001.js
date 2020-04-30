const req = (i) => {
    console.log(i);
    if (i === 0) {
        return i;
    }
    return req(--i);
}

req(10);
