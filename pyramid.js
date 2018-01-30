//Add Event listener  for number next to slider
slider = document.getElementById('pyramidHeight');
console.log(slider);
slider.addEventListener('input',updateCounterandDrawPyramid);


//Add event handler for character selection
charChoice = document.getElementById('char-choice');
charChoice.addEventListener('change', drawPyramid);

function updateCounterandDrawPyramid(){
    //update slider counter
    val = document.getElementById('pyramidHeight').value;
    sliderLabel = document.getElementById('counter');
    sliderLabel.innerHTML = val;

    drawPyramid();
   

}

function drawPyramid(){

     //get pyramid height
     val = document.getElementById('pyramidHeight').value;

     //get pyramid symbol
     pyramidChar = document.getElementById("char-choice").value;

     //draw pyramid with slider height
     
     //clear old pyramid
     document.getElementById("pyramid").innerHTML = "";
 
     //draw new pyramid
     height = parseInt(val);
     for(var row=0;row < height;row++){
 
         //figure out numeber of bricks and spaces
         var numBricks = row+2;
         var numSpaces = height -row;
 
         //build a string for the row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             var spaceChar = "&nbsp";
             rowStr += spaceChar;
         }
         for (var i = 0; i < numBricks; i++){
             rowStr += pyramidChar;
         }
 
         //create a <p> element with the text inside
         rowElem = document.createElement("p");
         rowElem.innerHTML = rowStr;
 
         //insert the paragraph into the div
         document.getElementById("pyramid").appendChild(rowElem);
     }
}