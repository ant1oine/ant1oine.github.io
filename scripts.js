function createRain() {
    const rainContainer = document.getElementById('rainContainer');
    const numberOfDrops = 100;

    for (let i = 0; i < numberOfDrops; i++) {
        const rainDrop = document.createElement('div');
        rainDrop.classList.add('rain');
        rainDrop.style.left = `${Math.random() * 100}vw`;
        rainDrop.style.animationDuration = `${Math.random() * 5 + 1}s`; // Slowed down the rain
        rainDrop.style.setProperty('--i', i);
        rainDrop.innerText = 'hello';
        rainContainer.appendChild(rainDrop);
    }
}

createRain();
