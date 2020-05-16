const calculateAverage = (nums) => Math.round(nums.reduce((acc, val) => acc + val) / nums.length)

self.addEventListener('message', function(e) {
    const data = e.data;
    switch (data.cmd) {
        case 'average':
            const result = calculateAverage(data.nums); // Функция, вычисляющая среднее значение числового массива
            self.postMessage(result);
            break;
        default:
            self.postMessage('Unknown command');
    }
}, false);
