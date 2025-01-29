
// JavaScript functionality for portfolio

// Smooth Scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjusting for fixed header height
                behavior: 'smooth'
            });
        }
    });
});

// Placeholder for form submission functionality
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Displaying a simple alert for demo purposes
    alert('Received your message! Will get to you soon');

    // Reset the form
    this.reset();
});
