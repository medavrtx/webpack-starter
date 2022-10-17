import generateJoke from './generateJoke';
import './styles/main.scss';
import emoji from './assets/emoji.png';

const emojiImg = document.getElementById('emojiImg');
emojiImg.src = emoji;

console.log(generateJoke());
