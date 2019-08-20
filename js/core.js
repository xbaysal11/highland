//parallax
window.addEventListener('scroll', function (event) {
  var depth, i, layer, layers, len, movement, topDistance, translate3d;
  topDistance = this.pageYOffset;
  layers = document.querySelectorAll("[data-type='parallax']");
  for (i = 0, len = layers.length; i < len; i++) {
    layer = layers[i];
    depth = layer.getAttribute('data-depth');
    movement = -(topDistance * depth);
    translate3d = 'translate3d(0, ' + movement + 'px, 0)';
    layer.style['-webkit-transform'] = translate3d;
    layer.style['-moz-transform'] = translate3d;
    layer.style['-ms-transform'] = translate3d;
    layer.style['-o-transform'] = translate3d;
    layer.style.transform = translate3d;
  }
});

//carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    items: 3,
    margin: 72,
    center: false,
    nav: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        stagePadding: 15,
      },
      // breakpoint from 480 up
      480: {
        items: 1,
        stagePadding: 15,
      },
      // breakpoint from 768 up
      768: {
        items: 2,
        stagePadding: 15,
        margin: 40,
      },
      1200: {
        items: 3,
        stagePadding: 15,
        margin: 40,
      }
    }
  });
});

$("#myCarousel").carousel({
  interval: false
});

$("#NewsCarousel").carousel({
  interval: false
});

//form input file script
function myFunction() {
  var x = document.getElementById("file");
  var txt = "";
  if ('files' in x) {
    if (x.files.length == 0) {
      txt = "";
    } else {
      for (var i = 0; i < x.files.length; i++) {
        var file = x.files[i];
        if ('name' in file) {
          txt += "<p>" + file.name + "</p>";
        }
      }
    }
  }
  document.getElementById("filesInfo").innerHTML = txt;
}

var formSub = $('#formSub');
var formSuccess = $('#formSuccess');
var subBtn = $('subBtn');
$('#subBtn').click(function () {
  formSub.css('display', 'none');
  formSuccess.css('display', 'block');
  $('#closeBtn').css('display', 'block');
  $(this).css('display', 'none');
})

$('#closeBtn').click(function () {
  formSub.css('display', 'block');
  formSuccess.css('display', 'none');
  $(this).css('display', 'none');
  $('#subBtn').css('display', 'block');
})

//fixed header

$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $('.header-top-menu').addClass('fixed-header');
  } else {
    $('.header-top-menu').removeClass('fixed-header');
  }
});

document.body.onload = function () {
  var preloader = document.getElementById('HcPreloader');
  if (!preloader.classList.contains('preloader-done')) {
    preloader.classList.add('preloader-done');
  }
}


$(document).ready(function() {
  $('#nav li a').bind('click', function(e) {
      e.preventDefault();

      var target = $(this).attr("href");
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 2000, function() {
          location.hash = target;
      });
      return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop() + 100;
  $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('#nav li a.active-menu').removeClass('active-menu');
          $('#nav li a').eq(i).addClass('active-menu');
      }
  });
}).scroll();

$('.modal').on('shown.bs.modal', function() {
  $('.header-top-menu').css('opacity', 0);
})

$('.modal').on('hide.bs.modal', function() {
  $('.header-top-menu').css('opacity', 1);
})