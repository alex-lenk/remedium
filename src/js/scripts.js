$(document).ready(function () {

// Вывод актуального года в подвал сайта
    var dateMy = new Date();
    var currentYear = dateMy.getFullYear();
    document.getElementById('current-year').innerHTML = currentYear;

    // Yep, that's it!
    $('#scene').parallax();

    $('.statistic').appear(function () {
        $('.timer').countTo({
            speed: 5000,
            refreshInterval: 60,
            formatter: function (value, options) {
                return value.toFixed(options.decimals);
            }
        });
    });
});
