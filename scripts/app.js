$(document).ready(function() {

    /*
     * scrollable foreground images
     */

    var starPosition = $('.star').offset().top,
        documentHeight = $(document).height(),
        scrolledPosition = $(window).scrollTop();

    function animateStar(scrolledPosition) {
        var currentStarPosition = starPosition - (scrolledPosition * 1.0),
            rotationValue = scrolledPosition / documentHeight * 5400,
            fadeStart = 300,
            fadeApex = 550,
            fadeEnd = 750,
            fadeInValue = (scrolledPosition - fadeStart) * .005,
            fadeOutValue = 1 - ((scrolledPosition - fadeApex) * .005);

        $('.star')
            .css('transform', 'rotate(' + rotationValue + 'deg)')
            .css('top', currentStarPosition);

        // console.log('star position: ' + starPosition);
        console.log('scrolled position: ' + scrolledPosition);
        // console.log('currentStarPosition: ' + currentStarPosition);
        // console.log('document height', documentHeight);

        if (scrolledPosition >= fadeStart && scrolledPosition < fadeApex) {
            $('.star').css('opacity', fadeInValue);
        } else if (scrolledPosition >= fadeApex && scrolledPosition < fadeEnd) {
            $('.star').css('opacity', fadeOutValue);
        }
    }

    animateStar(scrolledPosition);

    // $(window).bind('scroll', function() {
    $(window).on('scroll', function() {
        scrolledPosition = $(window).scrollTop();

        animateStar(scrolledPosition);

        // scrolledAmount *= 1.5;
        // $('.bug').css({
        //     top: -scrolltop * .2 + 'px',
        //     transform: 'rotateX(10deg)'
        // });
        // $('.bug').css('top', -1);
        // $('.bug').animate({ top: '-=10' }, 10);
    });




    /*
     * event handler for nav menu click
     */

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
        console.log(page);

        /*
         * scroll to target page 
         */

        // 
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, 1000);
    });
});
