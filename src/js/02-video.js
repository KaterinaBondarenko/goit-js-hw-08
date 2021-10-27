import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const savedseconds = localStorage.getItem('LOCALSTORAGE_KEY');
const parsedSettings = JSON.parse(savedseconds);
console.log(parsedSettings); // why null?

const iframeEl = document.querySelector('#vimeo-player');

const player = new Player(iframeEl);

//Вызов воспроизведения видео
player.on('play', setTime);

// Указывает время воспроизвидения и записывает в локал хост!!!!!!!!!!
player.on('timeupdate', function (evt) {
  const currentTime = evt.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
  console.log('seconds:', currentTime);
});

function setTime(parsedSettings) {
  player.setCurrentTime(parsedSettings);
}

// player.setCurrentTime();
// //   .then(function (seconds) {
//     console.log(seconds);
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
