$(document).ready(function () {


        $('#create,#contacts').css("cursor", "pointer").hover(function () {
            $('#contacts').attr('href', 'contacts.html');
            $('#create').attr('href','create.html');
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