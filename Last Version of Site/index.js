$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$(document).ready(function(){
    
$("button").click(function() {
    $('html,body').animate({
        scrollTop: $("#elebele").offset().top},
        'slow');
});

$(".message").click(function() {
    $('html,body').animate({
        scrollTop: $(".login-page").offset().top},
        'slow');
});



});