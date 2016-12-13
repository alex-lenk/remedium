// Актальный год в подвале сайта
/*
 var dateMy = new Date();
 var year = dateMy.getFullYear();
 document.getElementById('year').innerHTML = year;
 */

$(document).ready(function () {

// Вывод актуального года в подвал сайта
    var dateMy = new Date();
    var currentYear = dateMy.getFullYear();
    document.getElementById('current-year').innerHTML = currentYear;

    //Плавная прокрутка к якорям на странице
    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 100;
        $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
        e.preventDefault();
    });
});
