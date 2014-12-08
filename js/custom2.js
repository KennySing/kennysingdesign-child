(function($){

$(window).load(function(){
	$(".full_screen").each(center_row_load);
});

$(window).resize(function() {
	$(".full_screen").each(center_row);
});

$(window).on('orientationchange', function() { 
	$(".full_screen").each(center_row);
});

function center_row() {
	var height = $(window).height();
	var section_height = $(this).height();
	var row_height = $(this).children('.et_pb_row').height();
	var row = $(this).children('.et_pb_row');
	var difference = (section_height - row_height) / 2;
	$(this).css("height", height);
	$(this).css("min-height", row_height);
	row.css("margin-top", difference);
}

function center_row_load() {
    var height = $(window).height();
	var row_height = $(this).children('.et_pb_row').height();
	var row = $(this).children('.et_pb_row');
	var difference = (height - row_height) / 2;
	$(this).css("height", height);
	$(this).css("min-height", row_height);
	row.css("margin-top", ($(this).height() - row_height) / 2);
}

})(jQuery)