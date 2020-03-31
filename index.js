// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    let textSelect = document.querySelector('#text')
    textSelect.textContent = 'This is really cool!'
  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );