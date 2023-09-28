(function() {
  let currentPlayingTrack = '0';
  let isPlaying = false;
  document.addEventListener('DOMContentLoaded', onDomLoaded);
  function onDomLoaded() {
    const body = document.querySelector('body');
    body.append(getOuterContainer(), getPlayerContainer());
  }
  // function to create outer container
  function getOuterContainer() {
    const data = getDatabyId(currentPlayingTrack);
    const outerContainer = document.createElement('div');
    outerContainer.classList.add('outer-container');
    const img = document.createElement('img');
    img.id = 'background';
    img.src = data.thumbnail
    const audio = document.createElement('audio');
    audio.id = 'track';
    audio.src = data.track;
    outerContainer.append(img, audio);
    return outerContainer;
  }
  function getPlayerContainer() {
    const data = getDatabyId(currentPlayingTrack);
    const playerContainer = document.createElement('div');
    playerContainer.classList.add('player-container');
    const trackImage = document.createElement('img');
    trackImage.id = 'thumbnail';
    trackImage.src = data.thumbnail;
    const actionBox = document.createElement('div');
    actionBox.classList.add('box');
    actionBox.append(getPlayerActions(data), getTrackProgress());
    playerContainer.append(trackImage, actionBox);
    return playerContainer;
  }
  function getPlayerActions(data) {
    const actionWrapper = document.createElement('div');
    actionWrapper.classList.add('player-action-wrapper');
    // play-pause section
    const playPauseContainer = document.createElement('div');
    playPauseContainer.classList.add('play-pause-container')
    const playPauseIcon = document.createElement('i');
    playPauseIcon.id = 'playPauseIcon';
    playPauseIcon.setAttribute('class', 'far fa-play-circle fa-3x');
    playPauseContainer.append(playPauseIcon);
    playPauseContainer.addEventListener('click', togglePlayPause);

    // track details section
    const trackDetails = document.createElement('div');
    trackDetails.classList.add('track-details');
    const artistName = document.createElement('h3');
    artistName.id = 'artist-name'
    artistName.innerText = data.trackArtist;
    const trackName = document.createElement('p');
    trackName.id = 'track-name';
    trackName.innerText = data.trackTitle;
    trackDetails.append(artistName, trackName);

    // forward - back icon
    const navigateContainer = document.createElement('div');
    navigateContainer.classList.add('navigate-control');
    const next = document.createElement('i');
    next.id = 'next-track';
    next.setAttribute('class', 'far fa-arrow-alt-circle-right fa-2x');
    const prev = document.createElement('i');
    prev.id = 'prev-track';
    prev.setAttribute('class', 'far fa-arrow-alt-circle-left fa-2x');
    navigateContainer.append(prev, next);
    actionWrapper.append(playPauseContainer, trackDetails, navigateContainer);
    return actionWrapper;
  }
  function getTrackProgress() {
    const progressWrapper = document.createElement('div');
    progressWrapper.classList.add('progress-wrapper');

    // progress bar
    const progressBar = document.createElement('div');
    const range = document.createElement('input');
    range.type = 'range';
    range.id = 'progress-bar';
    range.setAttribute('min', 0);
    range.setAttribute('max', '');
    range.setAttribute('value', 0);
    progressBar.classList.add('progress-bar');
    progressBar.append(range);
    // progress time
    const progressTime = document.createElement('div');
    progressTime.classList.add('track-time');
    const currentTime = document.createElement('div');
    currentTime.id = 'currentTime';
    currentTime.innerText = '00:00';
    const duration = document.createElement('div');
    duration.id = 'durationTime';
    duration.innerText = '00:00'
    progressTime.append(currentTime, duration);
    progressWrapper.append(progressBar, progressTime);
    return progressWrapper;
  }

  function progressValue() {
    const progressBar = document.getElementById('progress-bar');
    const track = document.getElementById('track');
    const trackCurrentTIme = document.getElementById('currentTime');
    const trackDuration = document.getElementById('durationTime');
    progressBar.max = track.duration;
    progressBar.value = track.currentTime;

    trackCurrentTIme.innerText = formatTime(track.currentTime);
    trackDuration.innerText = formatTime(track.duration);


  }
  function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }
  function togglePlayPause(event) {
    const playPauseIcon = document.getElementById('playPauseIcon');
    if (isPlaying) {
      // we will pause
      playPauseIcon.setAttribute('class', 'far fa-play-circle fa-3x')
    } else {
      // we will play 'far fa-play-circle fa-3x'
      playPauseIcon.setAttribute('class', 'far fa-pause-circle fa-3x')
    }
    isPlaying = !isPlaying;
  }
  function playNext() {
    // TODO
    // currentPlayingTrack ++;
    
  }
  function playPrev() {
    // TODO
    // currentPlayingTrack --;
  }
  function updateUi(currentPlayingTrack) {
    // get the track data based on currentPlayingTrack
    // change the attributes of <audio/>, trackTitle, artistName, reset the progress value to 0
  }

  setInterval(progressValue, 500)
})();