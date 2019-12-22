let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'my-image/firefox5.jfif') {
      myImage.setAttribute ('src','my-image/firefox7.jfif');
    } else {
      myImage.setAttribute ('src','my-image/firefox5.jfif');
    }
}

let myButton = document.querySelector('button'); /*Should've added button*/
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Warung Makan Fish, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Warung Makan Fish, ' + storedName;
  }  

  myButton.onclick = function() {
    setUserName();
  }

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Welcome to Warung Makan Fish, ' + myName;
    }
  }