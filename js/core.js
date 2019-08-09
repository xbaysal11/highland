
//parallax
window.addEventListener('scroll', function(event) {
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
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: false,
    items: 3,
    margin: 72,
    center: false,
    nav: true,
  });
});

$("#myCarousel").carousel({
  interval: false
});

$("#NewsCarousel").carousel({
  interval: false
});

//form input file script
function myFunction(){
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
$('#subBtn').click(function() {
  formSub.css('display', 'none');
  formSuccess.css('display', 'block');
  $('#closeBtn').css('display', 'block');
  $(this).css('display', 'none');
})

$('#closeBtn').click(function() {
  formSub.css('display', 'block');
  formSuccess.css('display', 'none');
  $(this).css('display', 'none');
  $('#subBtn').css('display', 'block');
})

//fixed header

$(window).scroll(function(){
  if ($(window).scrollTop() >= 800) {
      $('.header-top-menu').addClass('fixed-header');
  }
  else {
      $('.header-top-menu').removeClass('fixed-header');
  }
});

//page pilling

// $(document).ready(function() {
// 	$('#pagepiling').pagepiling();
// });