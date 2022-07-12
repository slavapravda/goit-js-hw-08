import localstorageApi from './localstorage';
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const IFRAME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localstorageApi.save(IFRAME_KEY, data.seconds);
};
player.setCurrentTime(localstorageApi.load(IFRAME_KEY));

player.on('timeupdate', throttle(onPlay, 1000));
