const sounds = [
  'canary',
  'cardinal',
  'cat',
  'chicks',
  'cows',
  'crow',
  'dog',
  'donkey',
  'duck',
  'elephant',
  'geese',
];

function showImage(image) {
  const photo = document.getElementById('images');
  photo.classList.add('image');
  photo.innerHTML = `<img src="/images/${image}.jpg" />`;
}

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopAudio();
    document.getElementById(sound).play();
    showImage(sound);
  });
  document.getElementById('buttons').appendChild(btn);
});

function stopAudio() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);

    audio.pause();
    audio.currentTime = 0;
  });
}
