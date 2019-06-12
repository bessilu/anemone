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

var imageUrl = new Array(156);

for(var i=0;i<156;i++){ 
imageUrl[i] = 'assets/renders/0%20(' + i + ').jpg'; }

       
$(document).on('input change', '#slider', function() {//listen to slider changes
    var v=$(this).val();//getting slider val
   $('#sliderStatus').html( $(this).val() );
  $("#renders").prop("src", imageUrl[v]);
});