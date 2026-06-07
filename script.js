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

// ==========================================================================
// CODE POUR FAIRE FONCTIONNER LE CLIC DE LA FAQ
// ==========================================================================


const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // On récupère l'élément parent (la ligne de la FAQ complète)
        const faqItem = question.parentElement;
        
        // Si cette question est déjà ouverte, on la ferme
        if (faqItem.classList.contains('open')) {
            faqItem.classList.contains('open');
            faqItem.classList.remove('open');
        } else {
            // Optionnel : ferme les autres questions ouvertes pour faire propre
            const activeItem = document.querySelector('.faq-item.open');
            if (activeItem) {
                activeItem.classList.remove('open');
            }
            
            // On ouvre la question cliquée
            faqItem.classList.add('open');
        }
    });
});
});
