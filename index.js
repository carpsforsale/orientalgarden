const gridContainer = document.querySelector('.grid-container');

// Generate random glowing grid lines with random positions and glowing effects
function createRandomGridLines() {
    const numberOfLines = 50; // Number of grid lines to generate

    // Clear only previous grid lines before adding new ones
    document.querySelectorAll('.grid-line').forEach(line => line.remove());

    for (let i = 0; i < numberOfLines; i++) {
        const gridLine = document.createElement('div');
        gridLine.classList.add('grid-line');
        
        // Randomly place the grid lines on the screen
        const xPosition = Math.random() * 100; // Random x-position (percentage)
        const yPosition = Math.random() * 100; // Random y-position (percentage)
        
        gridLine.style.width = `${Math.random() * 3 + 1}px`; // Random line width
        gridLine.style.height = `${Math.random() * 3 + 1}px`; // Random line height
        
        // Randomly choose vertical or horizontal lines
        if (Math.random() > 0.5) {
            gridLine.style.width = '2px';
            gridLine.style.height = `${Math.random() * 100 + 20}%`; // Vertical line
            gridLine.style.left = `${xPosition}%`;
            gridLine.style.top = `${yPosition}%`;
        } else {
            gridLine.style.height = '2px';
            gridLine.style.width = `${Math.random() * 100 + 20}%`; // Horizontal line
            gridLine.style.top = `${yPosition}%`;
            gridLine.style.left = `${xPosition}%`;
        }

        // Add the glowing effect with random timing
        gridLine.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration for glow
        gridContainer.appendChild(gridLine);
    }
}

createRandomGridLines();
