function getRandomVideo() {

var randomVideo = ['b.html', 'c.html', 'e.html', 'h.html', 'i.html', 'j.html', 'k.html', 'r.html', 's.html', 'u.html', 'v.html', 'w.html', 'y.html']

var rand = randomVideo[Math.floor(Math.random() * randomVideo.length)];

window.location.href = rand;

};
