const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let i = 0;

function init() {
  // Write your JavaScript code inside the init() function
  const main = document.querySelector('body');
  main.addEventListener('keydown', function(event){
    let key = parseInt(event.detail || event.which);
    if(key === code[i]) {
      i ++;
      if(i === code.length) {
        alert('You entered the code!');
        i = 0;
      }
    } else {
      i = 0;
    }
  });
}
