let currentAudio = null;

// Function to play a sound
function playSound(file) {
    // Remove previous audio if exists
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.remove();
    }

    // Create a new audio element
    const audio = document.createElement('audio');
    audio.src = `sounds/${file}`;
    audio.setAttribute('autoplay', 'true');
    audio.setAttribute('controls', 'true'); // optional: remove if you don't want control buttons

    // Append the audio to the DOM
    document.getElementById('buttons').appendChild(audio);

    // Set as currently playing audio
    currentAudio = audio;
}

// Add event listeners to all .btn buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        playSound(soundFile);
    });
});

// Stop button
const stopButton = document.querySelector('.stop');
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.remove();
        currentAudio = null;
    }
});
