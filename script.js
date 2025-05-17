document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('animateButton');
    const box = document.getElementById('box');

    // Retrieve user preference from localStorage
    const preference = localStorage.getItem('boxColor');
    if (preference) {
        box.style.backgroundColor = preference;
    }

    button.addEventListener('click', () => {
        // Trigger animation
        box.classList.toggle('animate');

        // Store user preference in localStorage
        const newColor = box.classList.contains('animate') ? 'red' : 'blue';
        localStorage.setItem('boxColor', newColor);
    });
});
