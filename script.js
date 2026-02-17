// Get all navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');

// Smooth scroll AND highlight active link
navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add 'active' class to clicked link
        this.classList.add('active');
        
        // Smooth scroll
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set first link (Home) as active on page load
navLinks[0].classList.add('active');