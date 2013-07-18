// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require modernizr-2.6.2.min
//= require jquery
//= require jquery_ujs
//= require bootstrap-alert
//= require bootstrap-dropdown
//= require bootstrap-collapse
//= require jquery.fancybox
//= require jquery.carouFredSel-6.2.0
//= require ga
//= require_self
//= require zipcode/mask.js
//= require jquery.validate.min.js
//= require zipcode/zipcode.js
//= require address.js

// FancyBox
$(".fancybox").fancybox({
  padding: 0,
  openEffect: 'elastic',
  openSpeed: 150,
  closeEffect: 'elastic',
  closeSpeed: 150,
  closeClick: true,
  helpers: {
    overlay: {
      css: {
        'background' : 'rgba(255, 255, 255, 0.5)'
      }
    }
  }
});

// carouFredSel
$(window).load(function() {
  $("#carousel-target").carouFredSel({
    items           : {
      visible       : 2
    },
    direction       : "left",
    circular        : true,
    infinite        : false,
    auto            : false,
    prev            : {
      button        : "#carousel-prev",
      key           : "left"
    },
    next            : {
      button        : "#carousel-next",
      key           : "right"
    },
    pagination      : "#carousel-pagination",
    scroll          : {
      items         : 1,
      duration      : 700
    }
  });
});
