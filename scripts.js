function validateLogin() {
    const password = document.getElementById('password').value;
    const unauthorizedMessage = document.getElementById('unauthorizedMessage');
    const alarmSound = document.getElementById('alarmSound');

    // Example validation
    if (password === '123') {
        alert('Login successful!');
        // Redirect or perform other actions
        return false; // Prevent form submission
    } else {
        unauthorizedMessage.style.display = 'block';
        alarmSound.play();
        setTimeout(() => {
            unauthorizedMessage.style.display = 'none';
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }, 3000); // Show the message and play the sound for 3 seconds
        return false; // Prevent form submission
    }
}

function createRain() {
    const rainContainer = document.getElementById('rainContainer');
    const numberOfDrops = 100;

    for (let i = 0; i < numberOfDrops; i++) {
        const rainDrop = document.createElement('div');
        rainDrop.classList.add('rain');
        rainDrop.style.left = `${Math.random() * 100}vw`;
        rainDrop.style.animationDuration = `${Math.random() * 5 + 1}s`; // Slowed down the rain
        rainDrop.style.setProperty('--i', i);
        rainDrop.innerText = '·';
        rainContainer.appendChild(rainDrop);
    }
}

createRain();
