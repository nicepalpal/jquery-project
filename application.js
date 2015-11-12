



$(document).ready(function(){
    createGrid(32);
    defaultGrid();
    addNewGrid();
    resetGrid();
    chooseColor();
  });

  var createGrid = function(x){ //Makes grid based on overall size of 960px, depending on the squareSize input
    squareSize = (960/x);
    for(var i = 0; i <(x*x); i++){
      $('#outer').append('<div class="unit"> </div>')
    }
    $('.unit').width(squareSize);
    $('.unit').height(squareSize);
    sketch();
  };

var sketch = function(){ //Logic for highlighting grids - blue is default color
  $('.unit').mouseenter(function(){
    $(this).addClass('hover');
  });
};


//to do - add random color, trails, add a color select option, fix CSS styling for navBar header, add a header,
//The below should be in the navBar.
//I should go back and change the color references to use HTML5 data attributes for each color button. Have jQuery search the dom for the color value of each button and then use that for CSS styling?
var defaultGrid = function(){  //Resets sketchpad to default settings
    $('#default').click(function(){
      $('.unit').removeClass('hover');
      createGrid(32);
    });
  };
var addNewGrid = function(){ //Add new grids on user input
  $('#newGrid').click(function(){
    $('.unit').remove();
    newGrids = $('input[name ="number of squares"]').val();
    if(newGrids > 100){
      alert("Sorry, can't go past 100x100 or it'll be slower than Congress!");
      createGrid(100);
      } else {
        createGrid(newGrids);
      };
    });
  };

var resetGrid = function(){ //Removes colors
  $('#reset').click(function(){
    $('.unit').unbind();
    $('.unit').removeClass('hover');
    sketch();
  })
}

var chooseColor = function(){ //Make multiple buttons for choosing basic colors
  $('#red').click(function(){
    $('.hover').css("background-color", "red");

  });
  $('#yellow').click(function(){
    $('.hover').css("background-color", "yellow");
  });
}
//The below should be in the extras bar. (random color, trails)
