document.addEventListener('DOMContentLoaded', () => {
    const groups = document.querySelectorAll('.comparison-group');

    groups.forEach(group => {
        setupGroupPlayback(group);
    });
});

function setupGroupPlayback(groupElement) {
    const videos = groupElement.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('play', () => {
            // Pause all other videos in this group
            videos.forEach(otherVideo => {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
        });
    });
}
