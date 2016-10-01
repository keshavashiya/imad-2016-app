console.log('Loaded!');



//move the image

var img = document.getElementById('madi');
var marginRight = 0;
function moveLeft () {
    marginRight = marginRight + 1;
    img.style.marginRight = marginRight + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveLeft, 10);
};

//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
  //make a request to the counter
  
  //capture the responceand store it in variable
  
  //rander the variable in correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.InnerHTML = counter.toString();
};