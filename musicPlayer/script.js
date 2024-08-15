const popup = document.getElementById("popup")
const record = document.getElementById("record")
const playBtn = document.getElementById("play")
const seekBackwardBtn = document.getElementById("backward")
const seekForwardBtn = document.getElementById("forward")
const songTitle = document.getElementById("songTitle")
const audio = document.querySelector("audio");
const progressBar = document.getElementById("seek");

playBtn.addEventListener('click', togglePlay)

let playing = false;

function togglePlay() {
    popup.classList.toggle("play")
    record.classList.toggle("spin")
    if (playing) {
        playBtn.innerHTML = "<i class='fa fa-play fa-2x'></i>"
        audio.pause()
    } else {
        playBtn.innerHTML = "<i class='fa fa-pause fa-2x'></i>"
        audio.play()
    }
    playing = !playing;
}

// update progress 
function updateProgressBar() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    if (progressBar.value == 100) {
        seekForward()   
    }
}

// set audio time to progress
function setAudioProgress() {
    audio.currentTime = (+progressBar.value * audio.duration) / 100
}

audio.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('change', setAudioProgress);

const songs = [
    {title: "Caroline", src:"Caroline"},
    {title: "Riches To Rags", src:"RichesToRags"},
    {title: "Wannabe Cowboy", src:"WannabeCowboy"},
]

let currentSong = 0;

function seekBackward() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    changeSong()
}

function seekForward() {
    currentSong++;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    changeSong()
}

function changeSong() {
    audio.src = `./music/${songs[currentSong].src}.mp3`
    songTitle.innerText = songs[currentSong].title;
    record.src = `./imgs/${songs[currentSong].src}.jpg`
    if (playing) {
        audio.play()
    }
}

seekBackwardBtn.addEventListener('click', seekBackward)
seekForwardBtn.addEventListener('click', seekForward)
