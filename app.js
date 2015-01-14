console.log("JavaScript is alive");

var greeting_div = document.getElementById("greeting");
greeting_div.innerHTML = "Hi Planet Earth";

function yellowList(){
  var lis = document.querySelectorAll('li');
  for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
      this.setAttribute('class', 'selected');
      this.style.backgroundColor = "yellow";
      var name = this.innerHTML;
      document.querySelector("img").setAttribute('src', './images/' + name + '.jpeg');
      console.log(this);
      // var newElement = document.createElement('li');
      // newElement.innerHTML = "Heyo!";
      // document.querySelector('#essentials > ul').appendChild(newElement);
    };
  };
};
yellowList()
