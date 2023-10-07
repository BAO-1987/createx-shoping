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

ScrollReveal().reveal(".hero__title, .title--banners", {
  distance: '0',
  delay: 0,
  duration: 0,
  reset: false,
  opacity: 1,
});


ScrollReveal().reveal(".arrival__text", {
  duration: 1000,
  distance: "20px",
  delay: "100",
  origin: "top",
});

ScrollReveal().reveal(".subscribe__box", {
  duration: 1000,
  distance: "20px",
  delay: "100",
  origin: "right",
});

ScrollReveal().reveal(".slider__btn, .btn--instagram", {
  duration: 800,
  distance: "30px",
  delay: "500",
  origin: "top",
});



ScrollReveal().reveal(".gender__list > li, .services__list > li, .instagram__list > li, .fashion__list > li", {
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
  ".arrival-slider, .trending-slider, .sale-slider, .mobile-app__inner", {
    duration: 700,
    distance: "20px",
    delay: "200",
    origin: "top",
  }
);

// ScrollReveal().reveal(".gallery__list> li", {
//   duration: 500,
//   distance: "10%",
//   delay: "100",
//   origin: "top",
//   interval: 200,
//   opacity: 0,
// });


// ScrollReveal().reveal(
//   ".services__more, .news__more, .reviews__more, .gallery__more, .slider-btn, .btn--second", {
//     duration: 500,
//     distance: "10px",
//     delay: "100",
//     origin: "top",
//   }
// );


// ScrollReveal().reveal(".contacts__inner, .pagination", {
//   duration: 700,
//   distance: "10px",
//   delay: "500",
//   origin: "top",
// });

// ScrollReveal().reveal(".tabs__nav> li", {
//   duration: 500,
//   distance: "10px",
//   easing: "ease",
//   delay: "100",
//   origin: "top",
//   interval: 200,
//   opacity: 1,
//   mobile: false,
// });


// ScrollReveal().reveal(".footer", {
//   duration: 800,
//   distance: "10px",
//   easing: "ease",
//   delay: "500",
//   origin: "bottom",
// });

// ScrollReveal().reveal(".title", {
//   duration: 500,
//   distance: "20px",
//   easing: "ease",
//   delay: "200",
//   origin: "top",
// });

// ScrollReveal().reveal(".dentures__title., title--second", {
//   duration: 600,
//   distance: "20px",
//   easing: "ease",
//   delay: "150",
//   origin: "top",
// });

// ScrollReveal().reveal(
//   ".advantages__list, .dentures__list, .services__list, .investment__list, .stages__list", {
//     duration: 600,
//     distance: "20px",
//     easing: "ease",
//     delay: "100",
//     origin: "top",
//   }
// );


//  function isMobile() {
//    return window.innerWidth <= 768; // Adjust the threshold as needed
//  }

//  // Initialize ScrollReveal and apply animations conditionally
//  function setupScrollReveal() {
//    const sr = ScrollReveal({
//      duration: 1000, // Set your animation duration
//      reset: true, // Reset the animation when the element is not in the viewport
//    });

//    const revealConfig = {
//      origin: 'bottom', // Change this to your desired animation origin
//      distance: '20px', // Change this to your desired animation distance
//    };

//    const elementsToAnimate = '.title--banners';

//    // Check if it's not a mobile device, then set the elements you want to animate
//    if (!isMobile()) {
//      sr.reveal(elementsToAnimate, revealConfig);
//    }
//  }

//  // Call the function to set up ScrollReveal and animations on load
//  setupScrollReveal();

//  // You can also call the function whenever you need to check for mobile and set up animations
//  // For example, you could call it on window resize:
//  window.addEventListener('resize', setupScrollReveal);


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
