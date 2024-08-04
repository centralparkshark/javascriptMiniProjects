const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progressBar = document.getElementById("progressBar");
const timestamp = document.getElementById("timestamp");

// Play and Pause Video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// update play pause icon
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// update progress and timestamp
function updateProgressBar() {
    progressBar.value = (video.currentTime / video.duration) * 100;

    // get minutes 
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins)
    }

    // get seconds 
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds)
    }

    timestamp.innerHTML = `${mins}:${seconds}`

}

// set video time to progress
function setVideoProgress() {
    video.currentTime = (+progressBar.value * video.duration) / 100
    console.log(video.currentTime)
}

// stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Event Listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgressBar);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progressBar.addEventListener('change', setVideoProgress);


