(function () {
  const countdownElements = document.querySelectorAll(".countdown");

  if (countdownElements !== null) {
    for (let i = 0; i < countdownElements.length; i++) {
      setupCountdown(countdownElements[i]);
    }
  }

  function setupCountdown(element) {
    const countdownDate = new Date(element.dataset.countdown).getTime();

    if (isNaN(countdownDate)) {
      return;
    }

    setInterval(function () {
      const currentDate = new Date().getTime();
      const remainingTime = parseInt((countdownDate - currentDate) / 1000);

      if (remainingTime >= 0) {
        const daysElement = element.querySelector(".countdown-days .countdown__value");
        const hoursElement = element.querySelector(".countdown-hours .countdown__value");
        const minutesElement = element.querySelector(".countdown-mins .countdown__value");
        const secondsElement = element.querySelector(".countdown-seconds .countdown__value");

        const days = Math.floor(remainingTime / (24 * 60 * 60));
        const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
        const seconds = Math.floor(remainingTime % 60);

        if (daysElement !== null) {
          daysElement.textContent = days < 10 ? "0" + days : days;
        }

        if (hoursElement !== null) {
          hoursElement.textContent = hours < 10 ? "0" + hours : hours;
        }

        if (minutesElement !== null) {
          minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
        }

        if (secondsElement !== null) {
          secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
        }
      }
    }, 1000);
  }
})();
