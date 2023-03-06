// /***** CALCULATE THE TIME REMAINING *****/
// function getTimeRemaining(endtime) {
//   let t = Date.parse(endtime) - Date.parse(new Date());

//   /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
//   let seconds = Math.floor((t / 1000) % 60);
//   let minutes = Math.floor((t / 1000 / 60) % 60);
//   let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   let days = Math.floor(t / (1000 * 60 * 60 * 24));

//   /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// /***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
// function initializeClock(id, endtime) {
//   let clock = document.getElementById(id);
//   let daysSpan = clock.querySelector('.days');
//   let hoursSpan = clock.querySelector('.hours');
//   let minutesSpan = clock.querySelector('.minutes');
//   let secondsSpan = clock.querySelector('.seconds');

//   function updateClock() {
//     const t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = '0' + t.days;
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//       document.getElementById("clockdiv").style.display = "none";
//     }
//   }

//   updateClock(); // run function once at first to avoid delay
//   let timeinterval = setInterval(updateClock, 1000);
// }

// /***** SET A VALID END DATE *****/
// const deadline = new Date(Date.parse(new Date())  + 1 * 1 * 1 * 10 * 1000);
// initializeClock('clockdiv', deadline);




// my next birthday
const newDate = new Date('mar 07 23 20:29:25').getTime()
const countdown = setInterval(() => {

  const date = new Date().getTime()
  const diff = newDate - date

  const month = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12)))
  const days = Math.floor(diff % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector(".seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds
  document.querySelector(".minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes
  document.querySelector(".hours").innerHTML = hours < 10 ? '0' + hours : hours
  document.querySelector(".days").innerHTML = days < 10 ? '0' + days : days
  document.querySelector(".months").innerHTML = month < 10 ? '0' + month : month

  if (diff <= 0) {
    clearInterval(countdown)
    // document.querySelector(".countdown").style.display = "none";
  }

}, 1000)
