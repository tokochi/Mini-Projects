const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photoArray = [];
let ready = false;
let imgsLoaded = 0;
let totalImages = 0;
const count = 30;
const apiKey = '7FyE0j-AN4vz2kA805nvF-WErNyLXLgmKHujDPGTA9A';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

function imgLoaded() {
	imgsLoaded++;

	if (imgsLoaded === totalImages) {
		ready = true;
		loader.hidden = true;
	}
}
function displayPhotos() {
	imgsLoaded = 0;
	totalImages = photoArray.length;
	photoArray.forEach((photo) => {
		const item = document.createElement('a');
		item.setAttribute('href', photo.links.html);
		item.setAttribute('target', '_blank');
		const img = document.createElement('img');
		img.setAttribute('src', photo.urls.regular);
		img.setAttribute('alt', photo.alt_description);
		img.setAttribute('title', photo.alt_description);
		img.addEventListener('load', imgLoaded);
		item.appendChild(img);
		imageContainer.appendChild(item);
	});
}
async function getPhoto() {
	try {
		const response = await fetch(apiUrl);
		photoArray = await response.json();
		displayPhotos();
	} catch (error) {}
}

window.addEventListener('scroll', () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
		ready = false;
		getPhoto();
	}
});
getPhoto();
