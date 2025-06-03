// var mySong = document.getElementById("mySong");
// var icon = document.getElementById("icon");

// icon.onclick = function () {
//     if (mySong.paused) {
//         mySong.play();
//         icon.src = "images/kisspng-graphic-design-food-pause-button-5acc10a116bd16.8036438015233230410932.jpg"
//     }
//     else {
//         mySong.pause();
//         icon.src = "images/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.webp"
//     }
// }


var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var nextButton = document.getElementById("nextButton");
var volumeSlider = document.getElementById("volumeSlider");

const songs = [
    { src: "musics/Ribs.mp3", title: "Ribs" },
    { src: "musics/The 1975 - About You (Official).mp3", title: "About You" },
    { src: "musics/The 1975 - Happiness (Official Video).mp3", title: "Happiness" },
    { src: "musics/The 1975 - Robbers.mp3", title: "Robbers" }
];
let currentSongIndex = 0;

mySong.src = songs[currentSongIndex].src;

icon.onclick = function () {
    if (mySong.paused) {
        mySong.play();
        icon.src = "images/kisspng-graphic-design-food-pause-button-5acc10a116bd16.8036438015233230410932.jpg";
    } else {
        mySong.pause();
        icon.src = "images/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.webp";
    }
};

nextButton.onclick = function () {
    currentSongIndex = (currentSongIndex + 1 ) % songs.length;
    mySong.src = songs[currentSongIndex].src;
    mySong.play();
    icon.src = "images/kisspng-graphic-design-food-pause-button-5acc10a116bd16.8036438015233230410932.jpg";
}

volumeSlider.oninput = function () {
    mySong.volume = volumeSlider.value;
};


mySong.onended = function () {
    icon.src = "images/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.webp";
};