function playSong(videoID, title, lyrics) {
    console.log("playSong function triggered!"); // Check if function runs

    let videoContainer = document.getElementById('video-container');
    let videoPlayer = document.getElementById('video-player');
    let lyricsContainer = document.getElementById('lyrics-container');

    console.log("Elements:", videoContainer, videoPlayer, lyricsContainer); // Debugging

    // Update video URL
    videoPlayer.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0&mute=1`;

    // Show video full-screen
    videoContainer.classList.add('active');

    // Update lyrics
    document.getElementById('song-title').innerText = title;
    document.getElementById('lyrics').innerText = lyrics;

    // Show lyrics
    lyricsContainer.classList.add('show');

    // Click anywhere to close
    videoContainer.onclick = function () {
        console.log("Closing video..."); // Debugging
        videoContainer.classList.remove('active');
        lyricsContainer.classList.remove('show');
        videoPlayer.src = ''; // Stops video
    };
}
