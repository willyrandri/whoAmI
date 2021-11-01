const navSlide = () => {
    const legit = document.querySelector('.legit');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    legit.addEventListener('click', ()=> {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.5}s`;
            }
        });
        legit.classList.toggle('garis');
    });
}

navSlide();
