//Add Event listener  for number next to slider
slider = document.getElementById('pyramid-height');
slider.oninput = updateCounter(this.value);

function updateCounter(val){
    sliderLabel = document.getElementById('counter');
    sliderLabel.innerHTML = val;}