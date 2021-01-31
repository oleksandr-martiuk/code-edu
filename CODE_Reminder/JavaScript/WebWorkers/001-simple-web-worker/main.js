const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
    const myWorker = new Worker('worker.js');

    first.onchange = function(){
        myWorker.postMessage([first.nodeValue, second.value]);
        console.log('Message posted to worker');
    }

    second.onchange = function(){
        myWorker.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    }

    myWorker.onmessage = function(e) {
        const value = +e.data.substring(8);

        if (value === 1000) {
            console.log('Worker has been terminated!');
            myWorker.terminate();
        } else {
            result.textContent = e.data;
            console.log('Message received from worker');
        }
    }
} else {
    console.log("Your browser doesn\'t support web workers.");
}