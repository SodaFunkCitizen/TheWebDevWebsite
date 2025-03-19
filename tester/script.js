document.addEventListener("DOMContentLoaded", function() {
    const songLinks = document.querySelectorAll('.song');
    const videoFrame = document.getElementById('video');
    const lyricsOverlay = document.getElementById('lyrics');
    const playPauseBtn = document.getElementById('playPauseBtn');
    let videoPlaying = false;

    songLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get video URL and lyrics
            const videoUrl = this.getAttribute('data-video');
            const lyricsText = this.getAttribute('data-lyrics');

            // Change the video source
            videoFrame.src = videoUrl + "?autoplay=1"; // Autoplay video when clicked

            // Display lyrics overlay
            lyricsOverlay.textContent = lyricsText;
            lyricsOverlay.classList.add('show');

            // Reset the play/pause state
            videoPlaying = true;
            playPauseBtn.textContent = "Pause";
        });
    });

    playPauseBtn.addEventListener('click', function() {
        if (videoPlaying) {
            // Pause the video (stop autoplay)
            videoFrame.src = ""; // Remove the video URL to stop playback
            playPauseBtn.textContent = "Play";
        } else {
            // Resume video playback
            videoFrame.src = videoFrame.src ? videoFrame.src : videoFrame.dataset.src + "?autoplay=1";
            playPauseBtn.textContent = "Pause";
        }
        videoPlaying = !videoPlaying;
    });
});
