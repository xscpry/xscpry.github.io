
$(document).ready(function(){
    $('.navbar-nav .nav-link').on('click', function(){
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });
});