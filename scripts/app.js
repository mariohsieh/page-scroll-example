$(document).ready(function() {
    $(document).on('click', '.page-link', function() {
        var page = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, 1000);
    });
});
