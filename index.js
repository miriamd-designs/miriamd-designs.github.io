$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
 

  $(this).ekkoLightbox({
                alwaysShowClose: true

});

  $(".img").click(function() {
	    $(this).toggleClass("zoomed");
	});
 

//    $("#boton-siguiente").on('click', function() {
//        $("#container2").hide();
//        return false;
//    });
// 
//    $("#boton-siguiente").on('click', function() {
//        $("#container2").show();
//        return false;
//    });




// $( "#boton-siguiente" ).click(function() {
//  $( "#container2" ).show( "slow", function() {
    // Animation complete.
//  });
});
