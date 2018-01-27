//Add Event listener  for number next to slider
slider = document.getElementById('pyramid-height');
//slider.addEventListener("oninput",updateCounterandDrawPyramid(this.value));
slider.addEventListener("oninput",console.log(slider.value));
console.log(slider.value);

function updateCounterandDrawPyramid(val){
    //update slider counter
    sliderLabel = document.getElementById('counter');
    sliderLabel.innerHTML = val;

    drawPyramid(val);
   

}

function drawPyramid(val){
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
         var numSpaces = height -row -1;
 
         //build a string for the row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++){
             rowStr += pyramidChar;
         }
 
         //create a text element with the string of characters
         textElem = document.createTextNode(rowStr);
 
         //create a <p> element with the text inside
         rowElem = document.createElement("p");
         rowElem.appendChild(textElem);
 
         //insert the paragraph into the div
         document.getElementById("pyramid").appendChild(rowElem);
     }
}