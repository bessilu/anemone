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

    //backtonorm
    $("#logoname").children('a').click(function () {
        var href = $(this).attr('href');

        // Delay setting the location for one second
        setTimeout(function () {
            window.location = href
        }, 1000);
        return false;
    });


    $("#logoname").children('a').click(function () {
        $('header').css("cursor", "default");
        //transition move


        $('#logoname').transition({
            y: 0,
            delay: 500
        });
        $('#create').transition({
            x: 0,
            width: 50,
            delay: 500
        });
        $('#about').transition({
            width: 50,
            delay: 500
        });
        $('#contacts').transition({
            x: 0,
            width: 50,
            delay: 500
        });
        $('#centralbox').transition({
            marginBottom: "23vh"
        })
        $('#arrow').transition({
            marginBottom: "-23vh"
        }).transition({
            opacity: 0,
        }, 500, 'in');

        $('#create').children('p').transition({
            opacity: 0,
        }, 500, 'in');
        $('#about').children('p').transition({
            opacity: 0,
        }, 500, 'in');
        $('#contacts').children('p').transition({
            opacity: 0,
        }, 500, 'in');

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

    var p = $(this).val();

    if (p < 1) {
        $('#tip').html('<p>This is the most gender neutral that anemone can be. You decide how to have fun with a vibrating ball!</p>');
    } else if (p < 87 && p > 0) {
        $('#tip').html('<p>These shapes are formely meant to stimulate a clitoris or small sensible spots.</p>');
    } else if (p > 86 && p < 111) {
        $('#tip').html('<p>These shapes should be adopted to stimulate transitioning clitorides, micropenises or intersexual organs of smaller dimensions.</p>');
    } else {
        $('#tip').html('<p>These more concave shapes are designed penises with larger dimensions. Find the right size!</p>');
    };





});