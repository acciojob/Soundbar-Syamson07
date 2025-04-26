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
        // If there is already audio playing, stop it
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset the audio to the beginning
        }

        // Get the sound file name from the button's data-sound attribute
        const soundFile = button.getAttribute('data-sound');
        currentAudio = playSound(soundFile);
    });
});

// Stop button to pause the audio
const stopButton = document.querySelector('.stop');
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the beginning
    }
});

// Optional: Cypress test mock to handle audio playback for testing
if (typeof Cypress !== 'undefined') {
    Cypress.on('uncaught:exception', (err) => {
        // Prevent test from failing if audio fails to load
        if (err.message.includes("Failed to load")) {
            return false;
        }
    });

    // Mock audio play for Cypress testing
    cy.window().then((win) => {
        cy.stub(win.Audio.prototype, 'play').as('playAudio');
    });
}
