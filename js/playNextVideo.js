function playNextVideo(){
    var videoElement = document.querySelector("video");
    var videoSrc = videoElement.src;
    var videoFileName = videoSrc.split("/");
    videoFileName = videoFileName[videoFileName.length-1];
    var currentIndex = vidyaList.indexOf(videoFileName);
    var nextIndex = (currentIndex+1) % vidyaList.length;
    videoElement.src = 'videos/'+vidyaList[nextIndex];
    videoElement.addEventListener('loadeddata', function(){
        videoElement.play();
    });

}
