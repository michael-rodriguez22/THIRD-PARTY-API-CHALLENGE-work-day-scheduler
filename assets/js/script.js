let currentDayEl = document.getElementById("currentDay");
currentDayEl.innerText = moment().format("[Today is] dddd, MMMM Do YYYY");

let timeblockEls = document.getElementsByClassName("time-block");
function colorCode() {
    for (var i = 0; i < timeblockEls.length; i++) {
        let hour = parseInt(timeblockEls[i].children[0].innerText);
        if (hour < 9) {
            hour = hour + 12;
        }
        if (moment().hour() < hour) {
            timeblockEls[i].children[1].className += " future";
        } else if (moment().hour() > hour) {
            timeblockEls[i].children[1].className += " past";
        } else {
            timeblockEls[i].children[1].className += " present";
        }
    }
}
colorCode();