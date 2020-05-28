const startDate = [1,1,2015];
const weekDays = {
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6,
    "Sunday": 7
};

function isLeapYear(y) {
    return Math.abs(y - 2000) % 4;
}

function recurringTask(firstDate, k, daysOfTheWeek, n) {
    // 2000-01-01 ---> Sunday
    const [d, m, y] = firstDate.split('/');
    console.log(isLeapYear(y));
}

// var firstDate = "01/01/2015",
// k = 2,
// daysOfTheWeek = ["Monday",  "Thursday"],
// n = 4,
// expected = ["01/01/2015",  "05/01/2015",  "15/01/2015",  "19/01/2015"]
    
// firstDate = "30/05/1995"
// k = 4
// daysOfTheWeek = ["Tuesday"]
// n = 1
// expected = ["30/05/1995"]
    
// firstDate = "22/02/2020"
// k = 1
// daysOfTheWeek = ["Saturday"]
// n = 2
// expected = ["22/02/2020",  "29/02/2020"]
    
// firstDate = "01/02/2100"
// k = 4
// daysOfTheWeek = ["Sunday",  "Monday"]
// n = 4
// expected = ["01/02/2100",  "07/02/2100",  "01/03/2100",  "07/03/2100"]
    
// firstDate = "23/02/2000"
// k = 2
// daysOfTheWeek = ["Wednesday",  "Friday"]
// n = 4
// expected = ["23/02/2000",  "25/02/2000",  "08/03/2000",  "10/03/2000"]
    
// firstDate = "31/12/2999"
// k = 1
// daysOfTheWeek = ["Tuesday"]
// n = 2
// expected = ["31/12/2999",  "07/01/3000"]
