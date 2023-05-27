// $( "p" ).click(function() {
//     $( this ).slideUp();
//   });

$( "p" ).click(function() {
    $(this).slideUp();
});

// Can also hide p elements

$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
});

// Can also hide p element when button is click

$("button").on('click', function() {
    $('p').css('opacity', 0);
});