const mobileNavToggle = document.getElementById('nav-toggle');

const navLinks = document.getElementsByClassName('nav-links');

navLinks[0].addEventListener('click', () => {
    mobileNavToggle.checked = false;
});

