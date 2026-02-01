// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking link
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('.section, .hero-section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate skill bars
            if (entry.target.classList.contains('skill-fill')) {
                entry.target.classList.add('animated');
            }
            
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.skill-fill, .value-box, .project-item, .contact-card').forEach(el => {
    observer.observe(el);
});

// Chart Animation
const canvas = document.getElementById('mainChart');
const ctx = canvas.getContext('2d');

canvas.width = 350;
canvas.height = 180;

const chartData = [55, 70, 65, 85, 75, 92];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

let animProgress = 0;

function drawChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (animProgress < 1) {
        animProgress += 0.02;
        requestAnimationFrame(drawChart);
    }
    
    const padding = 30;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    const barWidth = chartWidth / chartData.length - 12;
    
    chartData.forEach((value, i) => {
        const x = padding + i * (barWidth + 12);
        const barHeight = (value / 100) * chartHeight * animProgress;
        const y = padding + chartHeight - barHeight;
        
        // Gradient
        const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        
        // Draw bar
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 8);
        ctx.fill();
        
        // Value
        if (animProgress > 0.8) {
            ctx.fillStyle = '#0f172a';
            ctx.font = 'bold 13px Satoshi';
            ctx.textAlign = 'center';
            ctx.fillText(value + '%', x + barWidth / 2, y - 8);
        }
        
        // Month label
        ctx.fillStyle = '#64748b';
        ctx.font = '12px Satoshi';
        ctx.fillText(months[i], x + barWidth / 2, canvas.height - 10);
    });
}

// Polyfill for roundRect
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
        this.moveTo(x + r, y);
        this.lineTo(x + w - r, y);
        this.quadraticCurveTo(x + w, y, x + w, y + r);
        this.lineTo(x + w, y + h - r);
        this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        this.lineTo(x + r, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r);
        this.lineTo(x, y + r);
        this.quadraticCurveTo(x, y, x + r, y);
        this.closePath();
    };
}

setTimeout(() => {
    drawChart();
}, 700);

// Contact Form
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
