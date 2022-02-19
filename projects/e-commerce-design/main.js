/*
 jQuery placeholderTypewriter plugin
 ===================================
 Author: Bjoern Diekert <https://github.com/bdiekert>
 Version: 1.0
 License: Unlicense <http://unlicense.org>
 */
(function ($) {
  "use strict";

  $.fn.placeholderTypewriter = function (options) {

    // Plugin Settings
    var settings = $.extend({
      delay: 50,
      pause: 1000,
      text: []
    }, options);

    // Type given string in placeholder
    function typeString($target, index, cursorPosition, callback) {

      // Get text
      var text = settings.text[index];

      // Get placeholder, type next character
      var placeholder = $target.attr('placeholder');
      $target.attr('placeholder', placeholder + text[cursorPosition]);

      // Type next character
      if (cursorPosition < text.length - 1) {
        setTimeout(function () {
          typeString($target, index, cursorPosition + 1, callback);
        }, settings.delay);
        return true;
      }

      // Callback if animation is finished
      callback();
    }

    // Delete string in placeholder
    function deleteString($target, callback) {

      // Get placeholder
      var placeholder = $target.attr('placeholder');
      var length = placeholder.length;

      // Delete last character
      $target.attr('placeholder', placeholder.substr(0, length - 1));

      // Delete next character
      if (length > 1) {
        setTimeout(function () {
          deleteString($target, callback)
        }, settings.delay);
        return true;
      }

      // Callback if animation is finished
      callback();
    }

    // Loop typing animation
    function loopTyping($target, index) {

      // Clear Placeholder
      $target.attr('placeholder', '');

      // Type string
      typeString($target, index, 0, function () {

        // Pause before deleting string
        setTimeout(function () {

          // Delete string
          deleteString($target, function () {
            // Start loop over
            loopTyping($target, (index + 1) % settings.text.length)
          })

        }, settings.pause);
      })

    }

    // Run placeholderTypewriter on every given field
    return this.each(function () {

      loopTyping($(this), 0);
    });

  };

}(jQuery));


//---------------------------------------------------------


// Links preventDefault
$('a').click(function (e) {
    e.preventDefault();
});

// Owl Carousel Options
var owlCarouselOptionOne = {
    items: 1,
    loop: true,
    margin: 10,
    lazyLoad: true,
    nav: true,
    navText: ["<i class='fa fa-angle-double-left fa-2x'></i>", "<i class='fa fa-angle-double-right fa-2x'></i>"],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
};

var owlCarouselOptionTwo = {
    items: 2,
    loop: true,
    margin: 10,
    lazyLoad: true,
    nav: true,
    navText: ["<i class='fa fa-angle-double-left fa-2x'></i>", "<i class='fa fa-angle-double-right fa-2x'></i>"],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
};

var owlCarouselOptionThree = {
    items: 1,
    loop: false,
    margin: 10,
    lazyLoad: true,
    nav: true,
    navText: ["<i class='fa fa-angle-double-left fa-2x'></i>", "<i class='fa fa-angle-double-right fa-2x'></i>"],
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
};

// Owl Carousels
var owlOne = $('.owl-one'); // Home Page 1 (left)
owlOne.owlCarousel(owlCarouselOptionOne);

var owlTwo = $('.owl-two'); // Home Page 2 (right-top)
owlTwo.owlCarousel(owlCarouselOptionOne);

var owlThree = $('.owl-three'); // Home Page 3 (right-bottom)
owlThree.owlCarousel(owlCarouselOptionTwo);

var owlFour = $('.owl-four'); // Computers Page
owlFour.owlCarousel(owlCarouselOptionOne);

var owlFive = $('.owl-five'); // Computer Page
owlFive.owlCarousel(owlCarouselOptionThree);

// Title blur/focus change
var oldTitle = document.title;
$(window).blur(function () {
    document.title = 'Bizi Unutmayın..';
});
$(window).focus(function () {
    document.title = oldTitle;
});

// Search input placeholder type writter
var placeholderText = [
    "Anahtar kelime..",
    "Marka..",
    "Model.."
];

// Search input typewriting effect
$('.searchInput').placeholderTypewriter({
    text: placeholderText
});