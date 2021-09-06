// Header Menu BG Color Start
const navbar = document.querySelector('#mainNav');
  window.addEventListener('scroll', function (e) {
  const lastPosition = window.scrollY;
  if (lastPosition > 50) {
  navbar.classList.add('active');
  } else if (navbar.classList.contains('active')) {
  navbar.classList.remove('active');
  } else {
  navbar.classList.remove('active');
  }
});
// Header Menu BG Color End
// Dropdown Menu Start
$(document).ready(function () {
  $('.navbar-light .dmenu').hover(function () {
          $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
      }, function () {
          $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
      });
}); 
// Dropdown Menu End
// Equal Height Start
$(function() {
  $('.equalHeight').matchHeight({
  byRow: true,
  property: 'height'
  });
});
// Equal Height End