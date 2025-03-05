document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const bookingForm = document.getElementById('booking-form');
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            from: document.getElementById('from').value,
            to: document.getElementById('to').value,
            date: document.getElementById('date').value,
            passengers: document.getElementById('passengers').value
        };
        
        // Validate form data
        if (validateFormData(formData)) {
            // Show success message
            alert('Booking search initiated! We\'ll find the best buses for you.');
            bookingForm.reset();
        }
    });
    
    // Form validation
    function validateFormData(data) {
        if (!data.from || !data.to || !data.date || !data.passengers) {
            alert('Please fill in all fields');
            return false;
        }
        
        const selectedDate = new Date(data.date);
        const today = new Date();
        
        if (selectedDate < today) {
            alert('Please select a future date');
            return false;
        }
        
        return true;
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add active class to navigation links on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});