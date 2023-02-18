const secondsEl = document.getElementById('seconds');

let seconds = 0;
const intervalId = setInterval(() => {
  seconds++;
  secondsEl.innerText = seconds;

  if (seconds === 60) {
    clearInterval(intervalId);
    alert ("60 секунд прошло!");
  } console.log(seconds);

}, 1000);
  
const block = document.querySelector("#block");
let x = 0;
let y = 0;
function moveBlock() {
  setTimeout(() => {
    if (x < 500 && y <= 0) {
      x += 20;
    } else if (x >= 500 && y < 500) {
      y += 20;
    } else if (x > 0 && y >= 500) {
      x -= 20;
    } else if (x <= 0 && y > 0) {
      y -= 20;
    }

    block.style.left = x + "px";
    block.style.top = y + "px";
    moveBlock();
  }, 50);
}

moveBlock();
