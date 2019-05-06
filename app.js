$(function () {

    let qouteUrl = 'https://got-quotes.herokuapp.com/quotes';

    $.get(qouteUrl, function (data) {
        quoteAdder(data);
    });

    $(".new-quote").on('click', function (e) {
        e.preventDefault();

        $.get(qouteUrl, function (data) {
            quoteAdder(data);
        });
    });

    //
});

function quoteAdder(data) {
    $(".quote").html(data.quote);
    $(".owner").html(data.character);
}