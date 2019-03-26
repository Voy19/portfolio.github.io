"use strict";

$('.carousel-portfolio').owlCarousel({
  loop: true,
  items: 3,
  margin: 10,
  nav: true,
  dots: false,
  slideBy: 1,
  navText: ["<img src=\"img/next.png\" alt=\"\">", "<img src=\"img/next.png\" alt=\"\">"],
  autoplay: false,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
      margin: 10
    },
    550: {
      items: 2
    },
    768: {
      items: 3
    }
  }
});