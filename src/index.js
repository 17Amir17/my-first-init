const moment = require("moment");

const myFormat = 'YYYY-MM-DD';
function timeToNow(arr){
    const date = moment(arr, 'YYYY-MM-DD');
    const now = moment();
    return now - date;
}

function timeFromAToB(a, b){
    const dateA = moment(a, myFormat);
    const dateB = moment(b, myFormat);
    return dateB - dateA
}

function daysInMonth(date, format){
    return moment(date, format).daysInMonth()
}

function miliSecToDays(mili){
    return mili/(1000*60*60*24);
}

console.log(miliSecToDays(timeToNow(['2021/01/18'])) + " days")
console.log(miliSecToDays(timeFromAToB(['2021/10/18'], ['2021/12/02'])) + " days");
console.log(daysInMonth('2021-12-02', myFormat) + " days");