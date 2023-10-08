import ScrollReveal from "scrollreveal";
ScrollReveal({
  reset: true,
  easing: "ease",
});


ScrollReveal().reveal(".title", {
  duration: 1200,
  distance: "20px",
  delay: "100",
  origin: "top",
});

ScrollReveal().reveal(".hero__title, .title--banners, .modal__title, .single-reviews__title", {
  distance: '0',
  delay: 0,
  duration: 0,
  reset: false,
  opacity: 1,
});


ScrollReveal().reveal(".arrival__text, .single-blog__content", {
  duration: 1000,
  distance: "20px",
  origin: "top",
});

ScrollReveal().reveal(".subscribe__box", {
  duration: 1000,
  distance: "20px",
  delay: "100",
  origin: "right",
});

ScrollReveal().reveal(".footer", {
  duration: 1000,
  distance: "20px",
  delay: "100",
  origin: "bottom",
});

ScrollReveal().reveal(".slider__btn, .btn--instagram, .single-blog__article, .form--blog, .form--subscribe", {
  duration: 800,
  distance: "30px",
  delay: "500",
  origin: "top",
});



ScrollReveal().reveal(".gender__list > li, .services__list > li, .instagram__list > li, .fashion__list > li, .catalog__list > li, .checkout-form__list > li", {
  duration: 700,
  distance: "10px",
  delay: "200",
  origin: "top",
  interval: 300,
});

ScrollReveal().reveal(".partners__list > li, .categories__list > li", {
  duration: 700,
  distance: "10px",
  delay: "200",
  origin: "top",
   mobile: false,
});

ScrollReveal().reveal(
  ".arrival-slider, .trending-slider, .sale-slider, .mobile-app__inner, .interest-slider, .look__inner, .recently-slider, .alert, .related", {
    duration: 700,
    distance: "20px",
    delay: "200",
    origin: "top",
  }
);


const sr = ScrollReveal({
  duration: 1000, // Set your animation duration
  reset: true, // Reset the animation when the element is not in the viewport
});

// Function to check if the screen width is below or equal to 768 pixels (for mobile)
function isMobile() {
  return window.innerWidth <= 768; // Adjust the threshold as needed
}

// Function to enable/disable animations based on screen width
function toggleAnimations() {
  const elementsToAnimate = document.querySelectorAll('.banners__list > li');

  // Check if it's not a mobile device
  if (!isMobile()) {
    elementsToAnimate.forEach(element => {
      // Apply ScrollReveal animations for elements with class .title.title--banners
      sr.reveal(element, {
        duration: 1200,
        distance: "20px",
        delay: "100",
        origin: "top",
        interval: 200,
      });
    });
  }
}

// Call the function to set up animations initially
toggleAnimations();

// Add an event listener to recheck screen width and adjust animations on resize
window.addEventListener('resize', toggleAnimations);
