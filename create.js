$(document).ready(function () {


    $('#about,#contacts').css("cursor", "pointer").hover(function () {
        $('#contacts').attr('href', 'contacts.html');
        $('#about').attr('href', 'about.html');
        $(this).children('p').css(
            "borderBottom", "2px solid #000"
        );
        $('.headicons').find('p').css(
            "padding-bottom", "8px"
        );


    }, function () {
        $(this).children('p').css(
            "borderBottom", "0px solid #000"
        );
        $('.headicons').find('p').css(
            "padding-bottom", "10px"
        );
    });

});

var imageUrl = new Array(156);

for (var i = 0; i < 156; i++) {
    imageUrl[i] = 'assets/renders/0%20(' + i + ').jpg';
}


$(document).on('input change', '#slider', function () { //listen to slider changes
    var v = $(this).val(); //getting slider val
    $('#sliderStatus').html($(this).val());
    $("#renders").prop("src", imageUrl[v]);



    if (v < 1) {
        $('#tip').html('<p>This is the most gender neutral that anemone can be. You decide how to have fun with a vibrating ball!</p>');
    } else if (v < 87 && v > 0) {
        $('#tip').html('<p>These shapes are formely meant to stimulate a clitoris or small sensible spots.</p>');
    } else if (v > 86 && v < 111) {
        $('#tip').html('<p>These shapes should be adopted to stimulate transitioning clitorides, micropenises or intersexual organs of smaller dimensions.</p>');
    } else {
        $('#tip').html('<p>These more concave shapes are designed penises with larger dimensions. Find the right size!</p>');
    };





});