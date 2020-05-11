// const URLs = ['http://first.com', 'http://second.com'];
const URLs = ['1', '2', '3', '4'];

function getRes(arr, finCb, res = [], start = null) {
    if (!start)
        start = arr.length
    
    if (arr.length === start)
        finCb();

    if (arr.length === 0)
        return ['A'];

    const delay = Math.round(Math.random() * 3 * 500);
    setTimeout(function(){
        const i = arr.length - 1;
        res = [...res, arr[i]];
        arr.pop();
    
        console.log(res);
        return getRes(arr, res, finCb);
    }, delay);
}

const len = URLs.length;
getRes(URLs);
