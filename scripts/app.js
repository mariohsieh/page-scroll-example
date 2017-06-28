$(document).ready(function() {

    /*
     * scrollable foreground images
     */


    $(window).bind('scroll', function() {
        var scrollY = $(window).scrollTop();
        scrollY *= 1.5;
        $('.bug').css({
            top: -scrollY,
            transform: 'rotateX(10deg)'
        });
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
        }, 500);
    });
});
