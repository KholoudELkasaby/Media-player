var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');
var stopButton = document.getElementById('stopButton');
var progress = document.getElementById('progress');
var volume = document.getElementById('volume');
var albumArt = document.getElementById('albumArt');
var volumeIcon  = document.getElementById('sound');

var currentAudio = audio1; 
var defaultVolume = 50;


document.querySelector('.audio:nth-child(1)').addEventListener('click', function () {
    selectAudio(audio1, '1.jpg', '#916791');
});
document.querySelector('.audio:nth-child(2)').addEventListener('click', function () {
    selectAudio(audio2, '2.jpg', '#2E2E5F');
});
document.querySelector('.audio:nth-child(3)').addEventListener('click', function () {
    selectAudio(audio3, '3.jpg', '#fff');
});


playButton.addEventListener('click', function () {
    currentAudio.play();
});


pauseButton.addEventListener('click', function () {
    currentAudio.pause();
});


stopButton.addEventListener('click', function () {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    progress.value = 0; 
});


currentAudio.addEventListener('timeupdate', function () {
    progress.value = (currentAudio.currentTime / currentAudio.duration) * 100;
});

progress.addEventListener('input', function () {
    currentAudio.currentTime = (progress.value / 100) * currentAudio.duration;
});


volume.addEventListener('input', function () {
    
    currentAudio.volume = volume.value / 100 ;
    if (currentAudio.volume == 0) {
       
        volumeIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 4L9.91 6.09L12 8.18M4.27 3L3 4.27L7.73 9H3v6h4l5 5v-6.73l4.25 4.26c-.67.51-1.42.93-2.25 1.17v2.07c1.38-.32 2.63-.95 3.68-1.81L19.73 21L21 19.73l-9-9M19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.9 8.9 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-2.5 0c0-1.77-1-3.29-2.5-4.03v2.21l2.45 2.45c.05-.2.05-.42.05-.63"/>
        </svg>`;
       
       
    } else {  
        volumeIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a5 5 0 0 1 0 8m2.7-11a9 9 0 0 1 0 14M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5z"/>
        </svg>`;
       
    }
});


volumeIcon.addEventListener('click', function () {
    if (currentAudio.volume > 0) {
        currentAudio.volume = 0;
        volume.value = 0;
        volumeIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 4L9.91 6.09L12 8.18M4.27 3L3 4.27L7.73 9H3v6h4l5 5v-6.73l4.25 4.26c-.67.51-1.42.93-2.25 1.17v2.07c1.38-.32 2.63-.95 3.68-1.81L19.73 21L21 19.73l-9-9M19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.9 8.9 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-2.5 0c0-1.77-1-3.29-2.5-4.03v2.21l2.45 2.45c.05-.2.05-.42.05-.63"/>
            </svg>`;
    } else {
        currentAudio.volume = defaultVolume / 100;
        volume.value = defaultVolume;
        volumeIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a5 5 0 0 1 0 8m2.7-11a9 9 0 0 1 0 14M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5z"/>
            </svg>`;
    }
});





function selectAudio(audio, imgSrc, bgColor) {
    if (currentAudio) {
        currentAudio.pause(); 
        progress.value = 0; 
        volume.value = 50; 
    }
    currentAudio = audio;
    currentAudio.play();
    albumArt.src = imgSrc;
    document.body.style.backgroundColor = bgColor;
}
