// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate skill bars
            if (entry.target.classList.contains('level-bar')) {
                entry.target.classList.add('animated');
            }
            
            // Add fade-in animations
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill bars
document.querySelectorAll('.level-bar').forEach(bar => {
    observer.observe(bar);
});

// Observe sections for animations
document.querySelectorAll('.skill-card, .project-card, .value-item, .timeline-item').forEach(element => {
    observer.observe(element);
});

// Hero Chart Animation
const canvas = document.getElementById('performanceChart');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 350;
canvas.height = 180;

// Chart data
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const data = [65, 72, 68, 85, 78, 90];
const maxValue = Math.max(...data);

// Chart dimensions
const padding = 30;
const chartWidth = canvas.width - (padding * 2);
const chartHeight = canvas.height - (padding * 2);
const barWidth = chartWidth / data.length - 10;

let animationProgress = 0;

function drawChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update animation progress
    if (animationProgress < 1) {
        animationProgress += 0.015;
        requestAnimationFrame(drawChart);
    }
    
    // Draw bars
    data.forEach((value, index) => {
        const x = padding + (index * (barWidth + 10));
        const barHeight = (value / 100) * chartHeight * animationProgress;
        const y = padding + chartHeight - barHeight;
        
        // Create gradient for bars
        const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        
        // Draw bar
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 6);
        ctx.fill();
        
        // Draw value on top
        if (animationProgress > 0.8) {
            ctx.fillStyle = '#374151';
            ctx.font = 'bold 12px Poppins';
            ctx.textAlign = 'center';
            ctx.fillText(value + '%', x + barWidth / 2, y - 8);
        }
        
        // Draw month label
        ctx.fillStyle = '#6b7280';
        ctx.font = '11px Poppins';
        ctx.textAlign = 'center';
        ctx.fillText(months[index], x + barWidth / 2, canvas.height - 10);
    });
}

// Start chart animation after a short delay
setTimeout(() => {
    drawChart();
}, 500);

// Polyfill for roundRect (for older browsers)
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius) {
        this.moveTo(x + radius, y);
        this.lineTo(x + width - radius, y);
        this.quadraticCurveTo(x + width, y, x + width, y + radius);
        this.lineTo(x + width, y + height - radius);
        this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        this.lineTo(x + radius, y + height);
        this.quadraticCurveTo(x, y + height, x, y + height - radius);
        this.lineTo(x, y + radius);
        this.quadraticCurveTo(x, y, x + radius, y);
        this.closePath();
    };
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Form validation
    if (name && email && subject && message) {
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
