function getRandomVideo() {

var randomVideo = ['b.html', 'c.html', 'e.html']

var rand = randomVideo[Math.floor(Math.random() * randomVideo.length)];

window.location.href = rand;

};
