$(document).ready(function(){

    $(window).on("scroll", function() {
      if($(window).scrollTop() > 500) {
        $("nav").addClass("navbar-bg-scroll");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("nav").removeClass("navbar-bg-scroll");
      }
    });

});
