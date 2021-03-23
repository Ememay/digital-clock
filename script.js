/* 
    1 : get global elements
    2 : set an interval to run function every 1 second
    3 : main clock funtion , 3-1: get the current time (hour,minite,second);
    4 : insert previous info to element that catch in // 1
*/
// 1
const hourArea = document.querySelector('#hour');
const miniteArea = document.querySelector('#minite');
const secondArea = document.querySelector('#second');

// 2
let digitalClockCaller = setInterval(digitalClock, 1000)

// 3
function digitalClock() {
    // 3-1
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minite = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    // 4
    hourArea.innerHTML = hour + ':';
    miniteArea.innerHTML = minite + ':';
    secondArea.innerHTML = second;
}