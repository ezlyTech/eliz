// Sticky Header
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $("header").addClass("stickyHeader");
        }
        else{
        $("header").removeClass("stickyHeader");
        }
})