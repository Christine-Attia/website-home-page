window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar')
    const linkcustom = document.querySelectorAll('.linkcustom')
    const logo = document.getElementById('navbar-logo');
    const viewPortHeight = window.innerHeight
    if (window.scrollY >= viewPortHeight) {
        navbar.style.backgroundColor='white'
        linkcustom.forEach(link => {
            link.style.color = 'rgb(48, 48, 48)';
        });
        logo.src = 'images/logo-dark.png';
    } else {
        navbar.style.backgroundColor='transparent'
        linkcustom.forEach(link => {
            link.style.color = 'white';
        });
        logo.src = 'images/logo-light.png';
        navbar.style.fontWeight='500'
        navbar.style.fontSize='14px'
    }
})
