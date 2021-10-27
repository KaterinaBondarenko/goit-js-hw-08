import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframeEl = document.querySelector('#vimeo-player');

const player = new Player(iframeEl);

//Вызов воспроизведения видео
player.on('play', function () {
  console.log('played the video!');
});

// Указывает время воспроизвидения и записывает в локал хост!!!!!!!!!!
player.on('timeupdate', function (evt) {
  const currentTime = evt.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
  // console.log('seconds:', currentTime);
});

// const savedseconds = localStorage.getItem('LOCALSTORAGE_KEY');
// const parsedSettings = JSON.parse(savedseconds);
// console.log(parsedSettings); // why null?

player
  .setCurrentTime(30)
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
