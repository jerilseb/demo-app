document.addEventListener('DOMContentLoaded', () => {
    const groups = document.querySelectorAll('.comparison-group');

    groups.forEach(group => {
        setupGroupPlayback(group);
    });

    setupImageModal();
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

function setupImageModal() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');
    const refImages = document.querySelectorAll('.ref-img');

    refImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}
