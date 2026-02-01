// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Skills animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress').forEach(bar => {
    skillObserver.observe(bar);
});

// Chart
const canvas = document.getElementById('heroChart');
const ctx = canvas.getContext('2d');
canvas.width = 350;
canvas.height = 180;

const data = [60, 75, 68, 88, 78, 95];
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

let progress = 0;

function drawChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (progress < 1) {
        progress += 0.02;
        requestAnimationFrame(drawChart);
    }
    
    const padding = 30;
    const chartW = canvas.width - padding * 2;
    const chartH = canvas.height - padding * 2;
    const barW = chartW / data.length - 12;
    
    data.forEach((val, i) => {
        const x = padding + i * (barW + 12);
        const h = (val / 100) * chartH * progress;
        const y = padding + chartH - h;
        
        const gradient = ctx.createLinearGradient(x, y, x, y + h);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barW, h, 8);
        ctx.fill();
        
        if (progress > 0.8) {
            ctx.fillStyle = '#0f172a';
            ctx.font = 'bold 14px Inter';
            ctx.textAlign = 'center';
            ctx.fillText(val + '%', x + barW / 2, y - 10);
        }
        
        ctx.fillStyle = '#64748b';
        ctx.font = '13px Inter';
        ctx.fillText(labels[i], x + barW / 2, canvas.height - 12);
    });
}

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

setTimeout(() => drawChart(), 500);

// Form submit
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! I will get back to you soon.');
    e.target.reset();
});
