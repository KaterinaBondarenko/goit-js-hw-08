import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');

const onPlay = new Player(iframeEl, {
  duration: 61.857,
  percent: 0.049,
  seconds: 3.034,
});
