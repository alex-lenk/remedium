// Актальный год в подвале сайта
/*
 var dateMy = new Date();
 var year = dateMy.getFullYear();
 document.getElementById('year').innerHTML = year;
 */
$(document).ready(function () {

    //Плавная прокрутка к якорям на странице
    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 100;
        $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
        e.preventDefault();
    });
    
});
