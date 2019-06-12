$(document).ready(function () {

    $('#centralbox').click(function () {
        setTimeout(function () {
            
            $(document.body).css("overflow-y", "auto");
            $('#main').css("display", "block");
            $('#contacts').children('img').attr('src', 'assets/tamacoso_ico_trig.svg');
        }, 500);

        $('#centralbox').css("cursor", "default")
        //transition move


        $('#logoname').transition({
            y: -100
        });
        $('#create').transition({
            x: -120,
            width: 105
        });
        $('#about').transition({
            width: 106
        });
        $('#contacts').transition({
            x: 120,
            width: 105
        });
        $('#centralbox').transition({
            marginBottom: "-23vh"
        })
        $('#arrow').transition({
            marginBottom: "23vh"
        }).transition({
            opacity: 1,
        }, 500, 'in');
        
        $('#create').children('p').transition({
            opacity: 1,
            delay: 400
        }, 500, 'in');
        $('#about').children('p').transition({
            opacity: 1,
            delay: 400
        }, 500, 'in');
        $('#contacts').children('p').transition({
            opacity: 1,
            delay: 400
        }, 500, 'in');

        
        
        $('#about,#create').css("cursor", "pointer").hover(function () {
            
            $('#create').attr('href', 'create.html');
            $('#about').attr('href','about.html');
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

});