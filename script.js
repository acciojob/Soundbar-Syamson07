// Function to play sound
function playSound(file) {
    console.log(`Attempting to play: ${file}`);
    const audio = new Audio(`sounds/${file}`);
    
    // Error handling for unsupported audio formats
    audio.play().catch((err) => {
        console.error('Error playing audio:', err);
    });
    
    return audio;
}

// Variable to keep track of currently playing audio
let currentAudio = null;

// Add event listeners for each button
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        const soundFile = button.getAttribute('data-sound');
        currentAudio = playSound(soundFile);
    });
});

// Stop button
const stopButton = document.querySelector('.stop');
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});
