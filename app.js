console.log("JavaScript is alive");

var buttony = document.getElementById("reset");
var lis = document.querySelectorAll('li');
var greeting_div = document.getElementById("greeting");
greeting_div.innerHTML = "Hi Planet Earth";


function styleList() {
  for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
      this.setAttribute('class', 'selected');
      var name = this.innerHTML;
      document.querySelector("img").setAttribute('src', './images/' + name + '.jpeg');
      console.log(this);
    };
  };
};

buttony.onclick = function() {
  for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('class', '');
  }
  document.querySelector('img').setAttribute('src', './images/panic.jpeg');
};

styleList()
