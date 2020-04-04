$(document).ready(function() {
    $('.main-nav i').click(function() {
        $('.main-nav ul').slideToggle(200);
        if ($('.main-nav i').hasClass('ion-navicon-round')) {
            $('.main-nav i').removeClass('ion-navicon-round');
            $('.main-nav i').addClass('ion-close-round');
        } else {
            $('.main-nav i').removeClass('ion-close-round');
            $('.main-nav i').addClass('ion-navicon-round');
        }
    })
});
