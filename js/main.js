var vidyaList;
loadVideos();
document.getElementById('videonames').addEventListener('click', videoPlayButtonHandler);

document.querySelector('video').addEventListener('ended', playNextVideo);

document.getElementById('slowdown').addEventListener('click', slowdown);

document.getElementById('speedup').addEventListener('click', speedup);
