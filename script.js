document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active link
                setActiveLink(targetId);
            }
        });
    });
    
    // Set active navigation link based on scroll position
    function setActiveLink(targetId) {
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    }
    
    // Update active link on scroll
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('section').forEach(section => {
            if (section.offsetTop <= scrollPosition && 
                section.offsetTop + section.offsetHeight > scrollPosition) {
                const currentId = '#' + section.getAttribute('id');
                setActiveLink(currentId);
            }
        });
    });
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                message: this.querySelector('textarea').value
            };
            
            // For a real implementation, you would send this data to a server
            console.log('Form submission:', formData);
            
            // Show submission feedback
            alert('Thank you for your message! This is a demo - in a real implementation, your message would be sent.');
            
            // Reset the form
            this.reset();
        });
    }
    
    // Add animations when elements come into view
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should be animated
    document.querySelectorAll('.timeline-item, .education-item, .project-card, .cert-card').forEach(element => {
        observer.observe(element);
    });
    
    // Add a class to header when scrolling down
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
});
