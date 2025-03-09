const gridContainer = document.querySelector('.grid-container');

function createRandomGridLines() {
    const numberOfLines = 50;

    document.querySelectorAll('.grid-line').forEach(line => line.remove());

    for (let i = 0; i < numberOfLines; i++) {
        const gridLine = document.createElement('div');
        gridLine.classList.add('grid-line');
        
        const xPosition = Math.random() * 100; 
        const yPosition = Math.random() * 100;
        
        gridLine.style.width = `${Math.random() * 3 + 1}px`;
        gridLine.style.height = `${Math.random() * 3 + 1}px`; 
        
        if (Math.random() > 0.5) {
            gridLine.style.width = '2px';
            gridLine.style.height = `${Math.random() * 100 + 20}%`;
            gridLine.style.left = `${xPosition}%`;
            gridLine.style.top = `${yPosition}%`;
        } else {
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
