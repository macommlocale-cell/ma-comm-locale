/* ==========================================================================
   1. GESTION DU MENU BURGER MOBILE
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
    
    // On cible ton bouton burger et la liste des liens du menu
    const burgerBtn = document.querySelector('.burger-menu');
    const navList = document.querySelector('.main-navigation ul');

    if (burgerBtn && navList) {
        
        // Quand Amélie clique sur le bouton burger
        burgerBtn.addEventListener('click', function (e) {
            e.stopPropagation(); // Évite les petits bugs de clic
            navList.classList.toggle('active');
            burgerBtn.classList.toggle('active');
        });

        // Sécurité : Fermer le menu si on clique sur un lien (Accueil, Services...)
        const navLinks = document.querySelectorAll('.main-navigation a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navList.classList.remove('active');
                burgerBtn.classList.remove('active');
            });
        });

        // Sécurité : Fermer le menu si on clique n'importe où ailleurs sur l'écran
        document.addEventListener('click', function (e) {
            if (!burgerBtn.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
                burgerBtn.classList.remove('active');
            }
        });
    }
});

/* ==========================================================================
   2. SYSTEME DE SCROLL REVEAL (APPARITION AU DEFILEMENT)
   ========================================================================== */
const revealElements = document.querySelectorAll('.reveal');

const checkReveal = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);

/* ==========================================================================
   3. STYLE DU HEADER AU DEFILEMENT
   ========================================================================== */
const header = document.querySelector('.site-header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Permet d'ajouter une ombre ou changer le fond au scroll
        } else {
            header.classList.remove('scrolled');
        }
    });
}