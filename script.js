//your JS code here. If required.
// Get all buttons
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

// Function to play sound
function playSound(file) {
    const audio = new Audio(`sounds/${file}`);
    audio.play();
    return audio;
}

// Variable to keep track of currently playing audio
let currentAudio = null;

// Add event listeners for each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause(); // Stop previous audio if any
        }
        const soundFile = button.getAttribute('data-sound');
        currentAudio = playSound(soundFile);
    });
});

// Stop button to pause the audio
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the beginning
    }
});
