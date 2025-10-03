document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animation
    const sections = document.querySelectorAll('.content-section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px', threshold: 0.1 });
    sections.forEach(section => sectionObserver.observe(section));

    // Hamburger toggle
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

});
