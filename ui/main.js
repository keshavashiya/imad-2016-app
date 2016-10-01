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
  //create a request to the counter
  var request = new XMLRequest();
  //capture the responceand store it in variable
  request.onreadystateChange = function () {
    if (request.readystate === XMLHTTPRequest.Done) {
        //Take action
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.InnerHTML = counter.toString();
        }
    }  
    //Not Done Yet
  };
  
  //make a request
  request.open('GET', "http://keshavashiya.imad.hasura-app.io/counter", true);
  request.send(null);
  
  //rander the variable in correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.InnerHTML = counter.toString();
};