const image = document.querySelector('img');
const title = document.querySelector('#title');
const artist = document.querySelector('#artist');
const music = document.querySelector('#audio');
const progressContainer = document.querySelector('#progress-container');
const progress = document.querySelector('#progress');
const currentTimeEl = document.querySelector('#current-time');
const durationEl = document.querySelector('#duration');

const prevbtn = document.querySelector('#prev');
const playbtn = document.querySelector('#play');
const nextbtn = document.querySelector('#next');
let currentSong = 0;
const songs = [
	{
		name: 'jacinto-1',
		displayName: 'Electric Chill Machine',
		artist: 'tokochi'
	},
	{
		name: 'jacinto-2',
		displayName: 'Electric Chill Machine',
		artist: 'tokochi'
	},
	{
		name: 'jacinto-3',
		displayName: 'Electric Chill Machine',
		artist: 'tokochi'
	},
	{
		name: 'metric-1',
		displayName: 'Electric Chill Machine',
		artist: 'tokochi'
	}
];

function playSong() {
	playbtn.classList.replace('fa-play', 'fa-pause');
	playbtn.setAttribute('title', 'pause');
	music.play();
}
function pauseSong() {
	playbtn.classList.replace('fa-pause', 'fa-play');
	playbtn.setAttribute('title', 'play');
	music.pause();
}
playbtn.addEventListener('click', () => (!music.paused ? pauseSong() : playSong()));
function loadSong(song) {
	title.textContent = song.displayName;
	artist.textContent = song.artist;
	music.src = `music/${song.name}.mp3`;
	image.src = `img/${song.name}.jpg`;
}

function nextSong() {
	currentSong++;
	if (currentSong === songs.length) {
		currentSong = 0;
	}
	loadSong(songs[currentSong]);
	playSong();
}
function prevSong() {
	currentSong--;
	if (currentSong === -1) {
		currentSong = 0;
	}
	loadSong(songs[currentSong]);
	playSong();
}
function setProgressBar(e) {
    const { duration} = music;
    music.currentTime = (e.offsetX / this.clientWidth) * duration;
}

function updateprogressBar(e) {
	if (!music.paused) {
		const { duration, currentTime } = e.srcElement;
		if (duration) {
			const progressPercent = currentTime / duration * 100;
			progress.style.width = progressPercent.toString() + '%';
			if (duration % 60 < 10) {
				durationEl.textContent = Math.floor(duration / 60) + ':' + '0' + Math.floor(duration % 60);
			} else {
				durationEl.textContent = Math.floor(duration / 60) + ':' + Math.floor(duration % 60);
			}
            if (currentTime % 60 < 10) {
				currentTimeEl.textContent = Math.floor(currentTime / 60) + ':' + '0' + Math.floor(currentTime % 60);
			} else {
				currentTimeEl.textContent = Math.floor(currentTime / 60) + ':' + Math.floor(currentTime % 60);
			}
		}
	}
}
prevbtn.addEventListener('click', prevSong);
nextbtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateprogressBar);
music.addEventListener('ended', nextSong);
progressContainer.addEventListener('click', setProgressBar)
loadSong(songs[currentSong]);
