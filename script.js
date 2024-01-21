document.addEventListener('DOMContentLoaded', function () {
    const facebookSlider = document.getElementById('facebookSlider');
    const instagramSlider = document.getElementById('instagramSlider');
    const facebookValue = document.getElementById('facebookValue');
    const instagramValue = document.getElementById('instagramValue');
    const facebookBar = document.getElementById('facebookBar');
    const instagramBar = document.getElementById('instagramBar');

    function updateROI() {
        let facebookInvestment = parseInt(facebookSlider.value) * 2; // Double the slider value
        let instagramInvestment = parseInt(instagramSlider.value) * 2; // Double the slider value
        facebookValue.textContent = `$${facebookInvestment / 2}`; // Show original slider value
        instagramValue.textContent = `$${instagramInvestment / 2}`; // Show original slider value

        let facebookROI = Math.min(facebookInvestment, 800); // Double the limit for ROI
        let instagramROI = Math.min(instagramInvestment, 1600); // Double the limit for ROI

        let facebookBarHeight = (facebookROI / 2000) * 300; // Adjusted for new scale
        let instagramBarHeight = (instagramROI / 2000) * 300; // Adjusted for new scale

        facebookBar.style.height = `${facebookBarHeight}px`;
        facebookBar.querySelector('.bar-total').textContent = `$${facebookROI}`;
        
        instagramBar.style.height = `${instagramBarHeight}px`;
        instagramBar.querySelector('.bar-total').textContent = `$${instagramROI}`;
    }

    facebookSlider.addEventListener('input', updateROI);
    instagramSlider.addEventListener('input', updateROI);

    updateROI(); // Initial update to set the bars to the minimum value
});
