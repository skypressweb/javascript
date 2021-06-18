'use strict';

const toggleBtn = document.querySelectorAll('.faq-toggle');

toggleBtn.forEach(toggle => {
  toggle.addEventListener('click', () => {
    // console.log('clicked');
    toggle.parentNode.classList.toggle('active');
  });
});
