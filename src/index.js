import generateJoke from './generateJoke';
import './styles/main.scss';
import emoji from './assets/emoji.png';

const emojiImg = document.getElementById('emojiImg');
emojiImg.src = emoji;

const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();
