document.addEventListener('DOMContentLoaded', () => {
    const flipButton = document.getElementById('flip-button');
    const coinImage = document.getElementById('coin-image');
    const resultText = document.getElementById('result-text');
    
    // Score elements and tracking variables removed.

    // File paths for SVGs
    const headsPath = 'images/heads.svg';
    const tailsPath = 'images/tails.svg';

    function flipCoin() {
        // Prevent multiple clicks/flips during animation
        if (flipButton.disabled) return; 

        flipButton.disabled = true;
        
        // Randomly determine the outcome: 0 for Heads, 1 for Tails
        const outcome = Math.floor(Math.random() * 2); 
        
        // 1. Start the visual flip animation
        coinImage.classList.add('flipping');
        resultText.textContent = "Flipping..."; // Provide feedback during flip

        // 2. Wait for the animation to complete (2000ms from CSS)
        setTimeout(() => {
            // 3. Remove the animation class
            coinImage.classList.remove('flipping');

            let result;
            let imagePath;

            if (outcome === 0) {
                // It's Heads
                result = 'Head';
                imagePath = headsPath;
            } else {
                // It's Tails
                result = 'Tail';
                imagePath = tailsPath;
            }

            // 4. Update the coin image and result text
            coinImage.src = imagePath;
            coinImage.alt = `Coin ${result}`;
            resultText.textContent = result;
            
            // Score display update removed.
            
            // 5. Re-enable the button
            flipButton.disabled = false;

        }, 2000); // Delay matches the 2s animation in CSS
    }

    // Attach event listeners
    flipButton.addEventListener('click', flipCoin);
    coinImage.addEventListener('click', flipCoin); 
    
    // Initial score display update removed.
});