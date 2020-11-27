/* nav scroll */
$(window).on("scroll", function() { 
    if ($(window).scrollTop() > 100) {
        $(".nav li a").addClass("scroll");
    }else {
        $(".nav li a").removeClass("scroll");	
    }
});