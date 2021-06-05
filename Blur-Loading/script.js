const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let load = 0;

let interval = setInterval(blurEffect, 30);

function blurEffect() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }

  loadText.innerText = `${load}%`;
  console.log(load);
}
