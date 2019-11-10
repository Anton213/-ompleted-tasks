$(document).ready(function () {
    $('.set-overlay').on('click', function () {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideToggle("slow");
    });

    $('.close').on('click', function () {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideToggle("slow");
    });
});