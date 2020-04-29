const req = (arr, sum=0) => {
    if (!arr.length)
        return sum;

    sum += arr[0];
    arr.shift();
    console.log(sum);

    return req(arr, sum);
}

const arr = [22, 33, 44, 55, 111, 11, 77];

const result = req(arr);
console.log('-----> ', result);
