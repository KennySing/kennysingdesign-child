(function($){

$(document).ready(function(){
    var height = $(window).height();
$(".full_screen").css("height", height);
});

$(window).resize(function() {
    var height = $(this).height();
$(".full_screen").css("height", height);
});

})(jQuery)