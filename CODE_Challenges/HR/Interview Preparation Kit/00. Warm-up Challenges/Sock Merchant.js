function sockMerchant(n, ar) {
    let uniqueSocks = [];
    let pairCount = 0;

    for (let i = 0; i < ar.length; i++) {
        let sock = ar[i];
        if (uniqueSocks.includes(sock)) {
            pairCount++;
            uniqueSocks = uniqueSocks.filter(item => item !== sock);
            continue;
        }
        uniqueSocks.push(sock);
    }

    return pairCount;
}
