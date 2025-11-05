document.addEventListener('DOMContentLoaded', () => {
    const flipButton = document.getElementById('flip-button');
    const coinImage = document.getElementById('coin-image');
    const resultText = document.getElementById('result-text');
    
    // Score elements
    const headsCountElement = document.getElementById('heads-count');
    const tailsCountElement = document.getElementById('tails-count');

    // Score tracking variables
    let headsCount = 0;
    let tailsCount = 0;

    // File paths for SVGs
    const headsPath = 'images/heads.svg';
    const tailsPath = 'images/tails.svg';

    // Function to update the score display
    function updateScoreDisplay() {
        headsCountElement.textContent = headsCount;
        tailsCountElement.textContent = tailsCount;
    }

    function flipCoin() {
        // Prevent multiple clicks/flips during animation
        if (flipButton.disabled) return; 

        flipButton.disabled = true;
        
        // Randomly determine the outcome: 0 for Heads, 1 for Tails
        const outcome = Math.floor(Math.random() * 2); 
        
        // 1. Start the visual flip animation
        coinImage.classList.add('flipping');
        resultText.textContent = "Flipping..."; // Provide feedback during flip

        // 2. Wait for the animation to complete (1000ms from CSS)
        setTimeout(() => {
            // 3. Remove the animation class
            coinImage.classList.remove('flipping');

            let result;
            let imagePath;

            if (outcome === 0) {
                // It's Heads
                result = 'Head';
                imagePath = headsPath;
                headsCount++; // New: Increment Heads score
            } else {
                // It's Tails
                result = 'Tail';
                imagePath = tailsPath;
                tailsCount++; // New: Increment Tails score
            }

            // 4. Update the coin image and result text
            coinImage.src = imagePath;
            coinImage.alt = `Coin ${result}`;
            resultText.textContent = result;
            
            // New: Update the score display
            updateScoreDisplay();
            
            // 5. Re-enable the button
            flipButton.disabled = false;

        }, 1000); // This delay must match the animation duration (1s) in CSS
    }

    // Attach event listeners
    flipButton.addEventListener('click', flipCoin);
    coinImage.addEventListener('click', flipCoin); 
    
    // Initialize score display on load
    updateScoreDisplay();
});