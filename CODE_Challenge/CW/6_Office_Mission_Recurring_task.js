const md = {
    s: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    l: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}

function getParsedDate(dateStr) {
    const [d, m, y] = dateStr.split('/')
    return [+d, +m, +y];
};

function isLeap(y){
    if (y % 400 === 0)
        return true;
    if (y % 100 === 0)
        return false;
    if (y % 4 === 0)
        return true;
    else 
        return false;
}

function countLeaps(totalYeas){
    let leaps = 0;
    for (let i = 1; i <= totalYeas; i++)
        if (isLeap(i)) leaps++;

    return leaps;
}

const getMonthDays = (y) => (isLeap(y) ? md.l : md.s);

function getCurrYDays({d, m, y}){
    const mDays = getMonthDays(y);

    let daysAcc = +d;
    for (let i = 0; i < m-1; i++)
        daysAcc += mDays[i];

    return daysAcc;
}

function getWeekDay(name) {
    const weekDays = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7
    };
    return weekDays[name];
}

function getDateDay({d, m, y}) {
    const curYDays = getCurrYDays({d, m, y});

    const totalYeas = y - 1;
    const leaps = countLeaps(totalYeas);

    const daysCount = totalYeas * 365 + leaps + curYDays;
    let dayNum = daysCount % 7;
    if (dayNum < 1)
        dayNum += 7;

    return dayNum;
}

function getReqDates({d, m, y, o}, k, reqDays, n) {
    let currDate = getDateStr({m, d, y});
    const daysAcc = [];
    let repCounter = 0;

    if (reqDays.includes(o))
        daysAcc.push(currDate);

    let mDays = getMonthDays(y);

    while (true) {
        d++;
        if (d > mDays[m-1]) {
            d = 1;
            m++;
            if (m > 12) {
                m = 1;
                y++;
                mDays = getMonthDays(y);
            }
        }

        o++;
        if (o > 7) o = 1;

        if (repCounter) {
            repCounter--;
        } else {
            if (reqDays.some(dayOrder => dayOrder === o)) {
                currDate = getDateStr({m, d, y});
                daysAcc.push(currDate);
    
                if (daysAcc.length % reqDays.length === 0)
                    repCounter = 7 * (k - 1);
            }
        }

        if (daysAcc.length === n) break;
    }

    return daysAcc;
}

function getDateStr({d, m, y}) {
    const month = (m < 10) ? `0${+m}` : +m;
    const date = (d < 10) ? `0${+d}` : +d;

    return `${date}/${month}/${y}`;
}

function recurringTask(firstDate, k, daysOfTheWeek, n) {
    const [d, m, y] = getParsedDate(firstDate);

    const dayOrder = getDateDay({d, m, y});
    const reqDays = daysOfTheWeek.map(dayName => getWeekDay(dayName));
    const results = getReqDates({ d, m, y, o: dayOrder }, k, reqDays, n);

    return results;
}

recurringTask(firstDate, k, daysOfTheWeek, n);
