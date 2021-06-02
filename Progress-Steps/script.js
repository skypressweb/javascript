'use strict';

const progress = document.querySelector('#progress');
const previousBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
      console.log(currentActive);
    }
  });
}

nextBtn.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  } else {
  }
  update();
});

previousBtn.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  } else {
  }
  update();
});
