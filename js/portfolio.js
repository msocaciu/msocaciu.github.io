	$('#toggle').click(function(event) {
		console.log("Clicked");
	   $(this).toggleClass('active');
	   $('#overlay').toggleClass('open');
	  });

$(document).ready(function(){
	$('#box1').click(function(event) {
	window.location = "http://www.msocaciu.me/expansion/";
	});

	$('#box2').click(function(event) {
	window.location = "http://www.msocaciu.me/animation/";
	});

	$('#box3').click(function(event) {
	window.location = "http://www.msocaciu.me/influx/";
	});

	$('#box4').click(function(event) {
	window.location = "http://www.msocaciu.me/postershow/";
	});
	$('#box5').click(function(event) {
	window.location = "http://www.msocaciu.me/personalprojects/";
	});
	$('#box6').click(function(event) {
	window.location = "http://www.msocaciu.me/marchahead/";
	});
	$('#box7').click(function(event) {
	window.location = "http://www.msocaciu.me/petproject/";
	});
	$('#box8').click(function(event) {
	window.location = "http://www.msocaciu.me/octavobooks/";
	});
	$('#box9').click(function(event) {
	window.location = "http://www.msocaciu.me/asuholiday/";
	});
});
