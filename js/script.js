$(document).ready(function(){
    $("#navbarNavAltMarkup a").click(function(event){  
        if ($(".navbar-collapse").hasClass("show") && $(window).width() <= 960) {  
            $(".navbar-collapse").slideToggle();
        }
        var full_url = this.href;
        var parts = full_url.split("#");
        var target_offset = $("#"+parts[1]).offset();
        var target_top = (target_offset.top);
        $('html, body').animate({scrollTop:target_top}, 100);
        return false; 
    });
    $(".navbar-toggler").click(function(event) {
        $(".navbar-collapse").slideToggle(500);
    });
});