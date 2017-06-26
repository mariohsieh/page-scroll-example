$(document).ready(function() {

    // event handler for nav menu click
    $('.page-link').on('click', function() {
        var page = $(this).attr('href'); // get the page ID from href attribute

        $('html, body').animate({
            scrollTop: $(page).offset().top // logic to dynamically scroll to desired page
        }, 1000);
    });
});
