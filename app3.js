// NAVBAR
let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

// FILTERABLE GALLERY
$(document).ready(function () {
  $('.category-header').click(function () {
      $('.category-options').slideToggle(300);
      $('.dropdown-arrow').toggleClass('rotate');
  });

  $('.category-options ul li').click(function () {
      var selectedOption = $(this).text();
      $('.category-title').text(selectedOption);
      $('.category-options').slideUp(300);
      $('.dropdown-arrow').removeClass('rotate');
  });
});


// EVENTS FOR CALENDAR
$(document).ready(function() {
  $('.filter-button').on('click', function() {
    const filter = $(this).data('filter');
    
    if (filter === 'all') {
      $('#event p').show(); 
    } else {
      $('#event p').hide(); 

    
      $(`#event p[data-category="${filter}"]`).show();
    }
  });
});
