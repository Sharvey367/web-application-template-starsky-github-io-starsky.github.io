// Custom JavaScript

$(document).ready(function() {
    console.log("jQuery is ready!");

    // Example: Smooth scrolling for navigation links
    $('a.nav-link[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - $('.navbar').outerHeight() // Adjust for fixed header height
            }, 1000);
        }
    });

    // Example: Add a simple class on scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) { // Add class after scrolling 50px
            $(".navbar").addClass("navbar-scrolled"); // Add a class to style the navbar on scroll
        } else {
            $(".navbar").removeClass("navbar-scrolled");
        }
    });

    // Note: The .navbar-scrolled class is not styled in style.css, this is just an example of JS interaction.
    // You would add CSS like:
    // .navbar-scrolled {
    //     background-color: rgba(var(--bs-light-rgb), 0.95) !important; /* Slightly transparent white */
    //     box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    // }
});
