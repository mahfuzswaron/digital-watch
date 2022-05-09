const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const clock = document.getElementById('clock');
const colon = document.getElementsByClassName('colon');


let hours;
let minutes;
let seconds;
let isPM;

function hideColon() {
    for (c of colon) {
            c.style.color = 'black'
        }
}

function showColon() {
    for (c of colon) {
            c.style.color = 'white'
        }
}

function setTime() {
    const today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    if (hours > 12) {
        hours = hours - 12;
        isPM = true;
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;
    showColon()
}
setTime()

if (isPM) {
    const pm = document.createElement('span');
    pm.innerText = "PM";
    pm.classList.add('pm')
    clock.appendChild(pm)
}

setInterval(setTime,1000)
setInterval(hideColon, 2000)
