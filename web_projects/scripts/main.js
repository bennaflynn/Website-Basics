var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/goofy_boy.png') {
      myImage.setAttribute ('src','images/ben.png');
    } else {
      myImage.setAttribute ('src','images/goofy_boy.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName(){
  var myName = prompt('Pease enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool' + " " + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
}else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool' + " " + storedName;
}
myButton.onclick = function() {
  setUserName();
}
