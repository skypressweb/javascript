const jokeSpace = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', giveMeJokes);

giveMeJokes();

function giveMeJokes() {
  const config = {
    headers: { Accept: 'application/json' },
  };
  fetch('https://icanhazdadjoke.com/', config)
    .then(response => response.json())
    .then(data => {
      jokeSpace.innerHTML = data.joke;
    });
}
