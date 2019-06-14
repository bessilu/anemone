$(document).ready(function () {


    $('#about,#create').css("cursor", "pointer").hover(function () {
        $('#create').attr('href', 'create.html');
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