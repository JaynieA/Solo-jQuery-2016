var totalRed = 0;
var totalYellow = 0;
var totalGreen = 0;
var totalBlue = 0;

$(document).ready(function() {
  init();
}); // end doc ready

var init = function() {
  //.color-button event listener
  $('.color-button').on('click', function() {
    //get data from button clicked
    var colorClicked = $(this).data('color');
    //increment appropriate color count and update DOM
    if (colorClicked === 'red') {
      totalRed++;
      $('#red').html('Total red: '+ totalRed);
    } else if (colorClicked === 'yellow') {
      totalYellow++;
      $('#yellow').html('Total yellow: '+totalYellow);
    } else if (colorClicked === 'green') {
      totalGreen++;
      $('#green').html('Total green: '+totalGreen );
    } else if (colorClicked === 'blue') {
      totalBlue++;
      $('#blue').html('Total blue: ' + totalBlue);
    }
    //append color cube to the DOM
    addColorCube(colorClicked);
  }); // end .color-button event listener
};

var addColorCube = function(color) {
  console.log('add Colorcube: ', color);
  $('.container').append('<div class="color-cube"></div>');
  var $el = $('.container').children().last();
  $el.addClass(color);
}; // end addColorCube
