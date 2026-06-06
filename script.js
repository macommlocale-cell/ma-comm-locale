document.addEventListener('DOMContentLoaded', () => {
    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        root: null,
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
    });

   
    const elementsToAnimate = document.querySelectorAll('.about-text, .about-profile, .did-you-know-box, .service-row, .faq-item');
    
    elementsToAnimate.forEach(el => {
        animObserver.observe(el);
    });
});
