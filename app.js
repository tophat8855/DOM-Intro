console.log("JavaScript is alive");

var greeting_div = document.getElementById("greeting");
greeting_div.innerHTML = "Hi Planet Earth";

function yellowList(){
  var lis = document.querySelectorAll('li');
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = "yellow";
  }
}
yellowList()
