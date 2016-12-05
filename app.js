var totalRed = 0;

var totalYellow = 0;

var totalGreen = 0;

var totalBlue = 0;

$(document).ready(function() {
  init();
});

var init = function() {
  //.color-button event listener
  $('.color-button').on('click', function() {
    //get data from button clicked
    var colorClicked = $(this).data('color');
    console.log(colorClicked);

  }); // end .color-button event listener
};



var addColorCube = function() {
  console.log('in addColorCube');
}; // end addColorCube
