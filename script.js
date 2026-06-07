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
    Ah ! C'est pour ça que rien ne s'ouvre ! Si tu n'as plus le code JavaScript qui gère le clic et l'affichage des réponses, tes boutons de la FAQ sont comme des interrupteurs coupés : tu as beau cliquer dessus, il ne se passe rien.

On va réécrire ensemble ce script de clic pour qu'il redonne vie à tes menus déroulants, tout en cohabitant parfaitement avec notre animation au scroll.

Ouvre ton fichier .js et colle ce code à la suite de celui qu'on a mis pour l'animation (juste avant la toute dernière accolade fermante, ou tout à la fin de ton fichier) :

JavaScript
// ==========================================================================
// CODE POUR FAIRE FONCTIONNER LE CLIC DE LA FAQ
// ==========================================================================

// 1. On cherche tous les boutons ou les questions cliquables de la FAQ
// (Ajuste '.faq-question' si ta classe HTML porte un autre nom, comme .faq-toggle)
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
