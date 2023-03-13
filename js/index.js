const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $volume = document.querySelector('#volume');
const $progress = document.querySelector('#progress');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$volume.addEventListener('input', handleVolume);
$video.addEventListener('timeupdate', handleTimeUpdate);
$video.addEventListener('loadedmetadata', handleLoaded);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log('Le diste click al boton de play');
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log('Le diste click al boton de pausa');
}

function handleBackward() {
  $video.currentTime -= 10;
  console.log('Le diste click al boton de retroceder 10 segundos');
}

function handleForward() {
  $video.currentTime += 10;
  console.log('Le diste click al boton de adelantar 10 segundos');
}

function handleVolume() {
  $video.volume = $volume.value;
  console.log('Volumen:', $volume.value);
}

function handleLoaded() {
  $progress.max = $video.duration;
  console.log('Ha cargado mi video:', $video.duration);
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  console.log('Tiempo actual:', $video.currentTime);
}

$progress.addEventListener('input', handleProgress);

function handleProgress() {
  $video.currentTime = $progress.value;
  console.log('Actualizaste el tiempo de reproduccion', $progress.value);
}
