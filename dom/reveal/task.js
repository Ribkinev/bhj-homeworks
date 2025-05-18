let revealElements = document.querySelectorAll('.reveal');

function revealScroll() {
    revealElements.forEach(element => {
        let coordinatesElements = element.getBoundingClientRect();
        let windowHeight = window.innerHeight;
        
        if (coordinatesElements.top <= windowHeight) {
            element.classList.add('reveal_active');
        }
    });
}

window.addEventListener('scroll', revealScroll);
