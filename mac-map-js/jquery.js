// JQUERY

// keeps buttons highlighted on click
$(document).ready(function() {
	$('button').on('click', function() {
    $('button').removeClass('active');
    $(this).addClass('active');
  });
});
