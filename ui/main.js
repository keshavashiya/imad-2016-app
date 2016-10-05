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
//var counter = 0;
button.onclick = function () {
  //create a request to the counter
  var request = new XMLhttpRequest();
  //capture the responceand store it in variable
  request.onreadystateChange = function () {
    if (request.readystate === XMLhttpRequest.DONE) {
        //Take action
        if (request.status === 200) {
             //capture the list of name
            var names = request.responseText;
            names = JSON.parse(names);
            var list = "";
            for(var i=0; i<names.length; i++) {
            list += "<li>" + names[i] + "</li>";
            }
        var ul = document.getElementById("namelist");
        ul.innerHTML = list;
        }
    }  
    //Not Done Yet
  };
  
  //make a request
  request.open('GET', "http://keshavashiya.imad.hasura-app.io/submit-name?name=" + name, true);
  request.send(null);
  
 //rander the variable in correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.InnerHTML = counter.toString();
};


//submit name

var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById("submit_btn");
submit.onclick = function () {
  //make request to the server
  
  //capture the list of name
  var names = ["name1","name2","name3","name4","name5"];
  var list = "";
  for(var i=0; i<names.length; i++) {
      list += "<li>" + names[i] + "</li>";
  }
  var ul = document.getElementById("namelist");
  ul.innerHTML = list;
};
