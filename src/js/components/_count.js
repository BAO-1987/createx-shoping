/***** CALCULATE THE TIME REMAINING *****/
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());

  /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));

  /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

/***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock(); // run function once at first to avoid delay
  let timeinterval = setInterval(updateClock, 1000);
}

/***** SET A VALID END DATE *****/
let deadline = new Date(Date.parse(new Date())  + 7 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
