document.addEventListener('DOMContentLoaded', () => {
    const groups = ['1', '2'];

    groups.forEach(id => {
        setupExclusivePlayback(id);
    });
});

function setupExclusivePlayback(id) {
    const v1 = document.getElementById(`vid-${id}-before`);
    const v2 = document.getElementById(`vid-${id}-after`);

    // When v1 plays, pause v2
    v1.addEventListener('play', () => {
        if (!v2.paused) {
            v2.pause();
        }
    });

    // When v2 plays, pause v1
    v2.addEventListener('play', () => {
        if (!v1.paused) {
            v1.pause();
        }
    });
    
    // Optional: Sync current time when one is played, so they stay aligned? 
    // The user only said "dont play both at the same time", usually implies audio overlap issues.
    // I will leave time-sync out to keep it simple and manual unless requested.
}
