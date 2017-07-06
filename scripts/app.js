$(document).ready(function() {

    /*
     * scrollable foreground images
     */

    var starPosition = $('.star').offset().top, // position of star from top
        documentHeight = $(document).height(), // total length of the document
        scrolledPosition = $(window).scrollTop(); // how far down the user has scrolled


    /*
     * logic to animate a star
     */
    function animateStar(scrolledPosition) {
        var currentStarPosition = starPosition - (scrolledPosition * 1.0), // calculates distance from top relative to scrolled position
            rotationValue = scrolledPosition / documentHeight * 5400, // calculates a rotation degree relative to scrolled position
            fadeStart = 300, // scrolled position to start fading into visibility
            fadeApex = 550, // scrolled position to be completely visible
            fadeEnd = 750, // scrolled position to be invisible again
            fadeInValue = (scrolledPosition - fadeStart) * .005, // calculates fade in opacity relative to scrolled position
            fadeOutValue = 1 - ((scrolledPosition - fadeApex) * .005); // calculates fade out opacity relative to scrolled position

        $('.star')
            .css('transform', 'rotate(' + rotationValue + 'deg)') // rotate the star 
            .css('top', currentStarPosition); // moves the star by reseting the top value

        // conditionals to determine whether to fade in/out based on scrolled position
        if (scrolledPosition >= fadeStart && scrolledPosition < fadeApex) {
            $('.star').css('opacity', fadeInValue);
        } else if (scrolledPosition >= fadeApex && scrolledPosition < fadeEnd) {
            $('.star').css('opacity', fadeOutValue);
        }
    }

    animateStar(scrolledPosition);

    /*
     *******************************************
     * event handlers
     *******************************************
     */

    $(window).on('scroll', function() {
        scrolledPosition = $(window).scrollTop(); // save new scrolled position
        animateStar(scrolledPosition); // call animateStar function on each scroll for new star position/rotation 
    });

    // the selector of '.page-link' applies to any element with
    // that class.  if you look at the '<a>' tags in the nav menu,
    // all of them have the class 'page-link' so this one event handler will
    // work for all page links in the nav menu
    $('.page-link').on('click', function() {

        /*
         * get the page ID from href attribute
         */

        // after clicking on a page link, we need to get the page ID to link to.
        // that value is saved in the 'href' attribute of the element that was clicked.
        // so we create a variable called 'page' and store the value there.
        // the '$(this)' selector refers to the element that was clicked and
        // the '.attr('name of attribute we want')' method grabs the attribute value
        // i've included a console.log so you can see the value we are grabbing.
        var page = $(this).attr('href');

        /*
         * jQuery method to animate the webpage to desired section
         */
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, 1000);
    });
});
