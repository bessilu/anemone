$(document).ready(function () {


        $('#about,#contacts').css("cursor", "pointer").hover(function () {
            $('#contacts').attr('href', 'contacts.html');
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