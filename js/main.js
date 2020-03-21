var $circle = $('<div>').addClass('ball');

$('body').append($circle);

$('form').on('change', function () {

  var currentColour = $('input[type="color"]').val();

  $('.ball').css('background-color', currentColour);
});
