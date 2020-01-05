$("#toggle").click(function(){
	$(this).toggleClass("active");
	$("#overlay").toggleClass("open");
});

$(document).ready(function(){
  $('.carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    setGallerySize: true
  });
});