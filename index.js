const gridContainer = document.querySelector('.grid-container');

function createRandomGridLines() {
    const numberOfLines = 50;

    document.querySelectorAll('.grid-line').forEach(line => line.remove());

    for (let i = 0; i < numberOfLines; i++) {
        const gridLine = document.createElement('div');
        gridLine.classList.add('grid-line');
        
        // Set a random position
        const xPosition = Math.random() * 100;
        const yPosition = Math.random() * 100;
        
        if (Math.random() > 0.5) {
            // Vertical line
            gridLine.style.width = '2px';
            gridLine.style.height = `${Math.random() * 100 + 20}%`;
            gridLine.style.left = `${xPosition}%`;
            gridLine.style.top = `${yPosition}%`;
        } else {
            // Horizontal line
            gridLine.style.height = '2px';
            gridLine.style.width = `${Math.random() * 100 + 20}%`;
            gridLine.style.top = `${yPosition}%`;
            gridLine.style.left = `${xPosition}%`;
        }

        gridLine.style.animationDuration = `${Math.random() * 3 + 2}s`;
        gridContainer.appendChild(gridLine);
    }
}

createRandomGridLines();
