


const scroll = new SmoothScroll('a[href*="#"]', {
  // Selectors
  ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
  header: null, // Selector for fixed headers (must be a valid CSS selector)

  // Speed & Easing
  speed: 1150, // Integer. How fast to complete the scroll in milliseconds
  offset: 50, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
  easing: 'easeInOutCubic', // Easing pattern to use
  customEasing: function (time) {

    // Function. Custom easing pattern
    // If this is set to anything other than null, will override the easing option above

    // return <your formulate with time as a multiplier>

    // Example: easeInOut Quad
    return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

  },

  // Callback API
  before: function (anchor, toggle) { }, // Callback to run before scroll
  after: function (anchor, toggle) { } // Callback to run after scroll
});


$(document).ready(function () {
  $('.your-class').slick({
    // dots: true,
    // infinite: true,
    // speed: 500,
    // fade: true, 


    dots: true,
    infinite: false,
    speed: 300,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});