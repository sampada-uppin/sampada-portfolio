/* ===== CSS Variables ===== */
:root {
    /* Primary Colors - Professional Blue Theme */
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    --primary-500: #3b82f6;
    --primary-400: #60a5fa;
    --primary-50: #eff6ff;
    
    /* Accent Colors */
    --accent-purple: #8b5cf6;
    --accent-green: #10b981;
    --accent-orange: #f59e0b;
    --accent-pink: #ec4899;
    
    /* Neutral Colors */
    --gray-900: #111827;
    --gray-800: #1f2937;
    --gray-700: #374151;
    --gray-600: #4b5563;
    --gray-500: #6b7280;
    --gray-400: #9ca3af;
    --gray-300: #d1d5db;
    --gray-200: #e5e7eb;
    --gray-100: #f3f4f6;
    --gray-50: #f9fafb;
    
    /* Semantic Colors */
    --white: #ffffff;
    --black: #000000;
    --success: #10b981;
    --warning: #f59e0b;
    --error: #ef4444;
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-blue: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
    --gradient-purple: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
    --gradient-green: linear-gradient(135deg, #10b981 0%, #059669 100%);
    --gradient-orange: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    
    /* Typography */
    --font-display: 'Space Grotesk', sans-serif;
    --font-body: 'Poppins', sans-serif;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;
    
    /* Border Radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-full: 9999px;
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== Global Reset & Base Styles ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-body);
    color: var(--gray-800);
    background: var(--white);
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 700;
    line-height: 1.2;
    color: var(--gray-900);
}

a {
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-base);
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ===== Navigation ===== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--gray-200);
    transition: all var(--transition-base);
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: var(--shadow-md);
}

.nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.25rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--gray-900);
}

.logo i {
    color: var(--primary-600);
    font-size: 1.75rem;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2.5rem;
    align-items: center;
}

.nav-links a {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--gray-700);
    position: relative;
    padding: 0.5rem 0;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-blue);
    transition: width var(--transition-base);
}

.nav-links a:hover {
    color: var(--primary-600);
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-cta {
    background: var(--gradient-blue);
    color: var(--white) !important;
    padding: 0.625rem 1.5rem !important;
    border-radius: var(--radius-full);
    font-weight: 600;
}

.nav-cta::after {
    display: none;
}

.nav-cta:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 0.375rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
}

.mobile-toggle span {
    width: 25px;
    height: 3px;
    background: var(--gray-800);
    border-radius: var(--radius-full);
    transition: all var(--transition-base);
}

/* ===== Hero Section ===== */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding-top: 80px;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
}

.gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.5;
    animation: float 20s infinite ease-in-out;
}

.orb-1 {
    width: 500px;
    height: 500px;
    background: var(--gradient-primary);
    top: -10%;
    right: -5%;
    animation-delay: 0s;
}

.orb-2 {
    width: 400px;
    height: 400px;
    background: var(--gradient-blue);
    bottom: -10%;
    left: -5%;
    animation-delay: 5s;
}

.orb-3 {
    width: 300px;
    height: 300px;
    background: var(--gradient-purple);
    top: 50%;
    left: 50%;
    animation-delay: 10s;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
}

.hero-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
}

.badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 1.25rem;
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--success);
    margin-bottom: 1.5rem;
    box-shadow: var(--shadow-md);
}

.pulse {
    width: 8px;
    height: 8px;
    background: var(--success);
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.hero-title {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--gray-900);
}

.gradient-text {
    background: var(--gradient-blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
}

.hero-subtitle {
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--gray-600);
    margin-bottom: 2.5rem;
    max-width: 600px;
}

.hero-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 2.5rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: var(--radius-xl);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-lg);
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--primary-600);
    font-family: var(--font-display);
}

.stat-label {
    font-size: 0.875rem;
    color: var(--gray-600);
    font-weight: 500;
}

.stat-divider {
    width: 1px;
    background: var(--gray-300);
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    border-radius: var(--radius-lg);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    transition: all var(--transition-base);
    font-family: var(--font-body);
}

.btn-primary {
    background: var(--gradient-blue);
    color: var(--white);
    box-shadow: var(--shadow-lg);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-2xl);
}

.btn-outline {
    background: transparent;
    color: var(--gray-800);
    border: 2px solid var(--gray-300);
}

.btn-outline:hover {
    background: var(--white);
    border-color: var(--primary-600);
    color: var(--primary-600);
    box-shadow: var(--shadow-md);
}

.btn-large {
    padding: 1.25rem 2.5rem;
    font-size: 1.125rem;
}

.social-proof {
    margin-top: 2rem;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.social-icons a {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.9);
    border-radius: var(--radius-lg);
    color: var(--gray-700);
    transition: all var(--transition-base);
    box-shadow: var(--shadow-md);
}

.social-icons a:hover {
    background: var(--primary-600);
    color: var(--white);
    transform: translateY(-3px);
    box-shadow: var(--shadow-xl);
}

/* Dashboard Card in Hero */
.hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.dashboard-card {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-2xl);
    width: 100%;
    max-width: 450px;
}

.card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.card-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--gray-900);
}

.card-period {
    font-size: 0.875rem;
    color: var(--gray-500);
    background: var(--gray-100);
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius-md);
}

.chart-container {
    margin-bottom: 1.5rem;
}

.metrics-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.metric {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: var(--gray-50);
    border-radius: var(--radius-lg);
}

.metric-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    color: var(--white);
    font-size: 1rem;
}

.metric-icon.green {
    background: var(--gradient-green);
}

.metric-icon.blue {
    background: var(--gradient-blue);
}

.metric-icon.purple {
    background: var(--gradient-purple);
}

.metric-value {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gray-900);
}

.metric-label {
    font-size: 0.75rem;
    color: var(--gray-600);
}

/* ===== Section Styles ===== */
.section-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 6rem 2rem;
}

.section-header {
    margin-bottom: 4rem;
}

.section-header.centered {
    text-align: center;
}

.section-label {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--primary-600);
    margin-bottom: 1rem;
}

.section-title {
    font-size: 3rem;
    font-weight: 800;
    color: var(--gray-900);
    margin-bottom: 1rem;
}

.section-description {
    font-size: 1.125rem;
    color: var(--gray-600);
    max-width: 700px;
    margin: 0 auto;
}

/* ===== About Section ===== */
.about {
    background: var(--white);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: center;
}

.about-image-wrapper {
    position: relative;
}

.about-image {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: var(--radius-2xl);
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-2xl);
}

.image-placeholder {
    font-size: 12rem;
    color: rgba(255, 255, 255, 0.3);
}

.floating-card {
    position: absolute;
    background: var(--white);
    padding: 1rem 1.5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
    animation: float-card 3s infinite ease-in-out;
}

.floating-card i {
    font-size: 1.5rem;
    color: var(--primary-600);
}

.card-1 {
    top: 10%;
    right: -10%;
    animation-delay: 0s;
}

.card-2 {
    bottom: 10%;
    left: -10%;
    animation-delay: 1.5s;
}

@keyframes float-card {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.about-lead {
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.about-text {
    font-size: 1.0625rem;
    color: var(--gray-600);
    margin-bottom: 1.25rem;
    line-height: 1.8;
}

.value-props {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2.5rem;
}

.value-item {
    display: flex;
    gap: 1.25rem;
    align-items: start;
}

.value-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gradient-blue);
    border-radius: var(--radius-xl);
    color: var(--white);
    font-size: 1.5rem;
    flex-shrink: 0;
}

.value-text h4 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
    color: var(--gray-900);
}

.value-text p {
    color: var(--gray-600);
    line-height: 1.6;
}

/* ===== Skills Section ===== */
.skills {
    background: var(--gray-50);
}

.skills-showcase {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 4rem;
}

.skill-group-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: 2rem;
}

.skill-group-title i {
    color: var(--primary-600);
}

.skill-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
}

.skill-card {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    border: 2px solid transparent;
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-2xl);
    border-color: var(--primary-600);
}

.skill-icon {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-xl);
    font-size: 2rem;
    color: var(--white);
    margin-bottom: 1.25rem;
}

.skill-icon.python { background: var(--gradient-blue); }
.skill-icon.excel { background: var(--gradient-green); }
.skill-icon.sql { background: var(--gradient-orange); }
.skill-icon.tableau { background: var(--gradient-purple); }
.skill-icon.stats { background: var(--gradient-primary); }
.skill-icon.economics { background: var(--gradient-blue); }
.skill-icon.ml { background: var(--gradient-purple); }
.skill-icon.research { background: var(--gradient-orange); }

.skill-card h4 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--gray-900);
}

.skill-card p {
    color: var(--gray-600);
    font-size: 0.9375rem;
    margin-bottom: 1.25rem;
}

.skill-level {
    height: 8px;
    background: var(--gray-200);
    border-radius: var(--radius-full);
    overflow: hidden;
}

.level-bar {
    height: 100%;
    background: var(--gradient-blue);
    border-radius: var(--radius-full);
    width: 0;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.level-bar.animated {
    width: var(--level);
}

.tools-section {
    text-align: center;
    background: var(--white);
    padding: 3rem;
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-lg);
}

.tools-heading {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--gray-900);
}

.tools-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.tool-tag {
    background: var(--gray-100);
    color: var(--gray-800);
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-full);
    font-weight: 600;
    font-size: 0.9375rem;
    transition: all var(--transition-base);
    border: 2px solid transparent;
}

.tool-tag:hover {
    background: var(--primary-600);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

/* ===== Projects Section ===== */
.projects {
    background: var(--white);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--white);
    border-radius: var(--radius-2xl);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-base);
    border: 1px solid var(--gray-200);
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-2xl);
}

.project-card.featured {
    grid-column: span 2;
}

.project-image {
    position: relative;
    height: 240px;
    overflow: hidden;
}

.project-bg {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.9);
}

.bg-gradient-1 { background: var(--gradient-primary); }
.bg-gradient-2 { background: var(--gradient-blue); }
.bg-gradient-3 { background: var(--gradient-purple); }
.bg-gradient-4 { background: var(--gradient-orange); }

.project-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--white);
    color: var(--primary-600);
    padding: 0.5rem 1rem;
    border-radius: var(--radius-full);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.project-details {
    padding: 2rem;
}

.project-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.project-category {
    background: var(--primary-50);
    color: var(--primary-600);
    padding: 0.375rem 0.875rem;
    border-radius: var(--radius-md);
    font-size: 0.8125rem;
    font-weight: 600;
}

.project-date {
    color: var(--gray-500);
    font-size: 0.875rem;
}

.project-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: 1rem;
}

.project-description {
    color: var(--gray-600);
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tag {
    background: var(--gray-100);
    color: var(--gray-700);
    padding: 0.5rem 1rem;
    border-radius: var(--radius-md);
    font-size: 0.8125rem;
    font-weight: 600;
}

.project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;
    border-top: 1px solid var(--gray-200);
}

.project-link {
    color: var(--primary-600);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all var(--transition-base);
}

.project-link:hover {
    gap: 0.75rem;
}

.project-icons {
    display: flex;
    gap: 1rem;
}

.project-icons a {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gray-100);
    border-radius: var(--radius-md);
    color: var(--gray-700);
    transition: all var(--transition-base);
}

.project-icons a:hover {
    background: var(--primary-600);
    color: var(--white);
}

/* ===== Resume Section ===== */
.resume {
    background: var(--gray-50);
}

.resume-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    margin-bottom: 4rem;
}

.resume-heading {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: 2.5rem;
}

.resume-heading i {
    color: var(--primary-600);
}

.timeline {
    position: relative;
    padding-left: 2rem;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--gray-300);
}

.timeline-item {
    position: relative;
    padding-bottom: 2.5rem;
}

.timeline-item:last-child {
    padding-bottom: 0;
}

.timeline-dot {
    position: absolute;
    left: -2.5rem;
    top: 0.5rem;
    width: 16px;
    height: 16px;
    background: var(--primary-600);
    border: 4px solid var(--white);
    border-radius: 50%;
    box-shadow: 0 0 0 4px var(--primary-50);
}

.timeline-content {
    background: var(--white);
    padding: 1.5rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
}

.timeline-content:hover {
    transform: translateX(5px);
    box-shadow: var(--shadow-lg);
}

.timeline-date {
    display: inline-block;
    background: var(--primary-50);
    color: var(--primary-600);
    padding: 0.375rem 0.875rem;
    border-radius: var(--radius-md);
    font-size: 0.8125rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.timeline-content h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: 0.5rem;
}

.timeline-institution {
    color: var(--gray-600);
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.timeline-description {
    color: var(--gray-600);
    line-height: 1.7;
}

.resume-download {
    text-align: center;
}

/* ===== Contact Section ===== */
.contact {
    background: var(--white);
}

.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-card {
    background: var(--gray-50);
    padding: 2rem;
    border-radius: var(--radius-xl);
    text-align: center;
    transition: all var(--transition-base);
}

.contact-card:hover {
    background: var(--white);
    box-shadow: var(--shadow-lg);
    transform: translateY(-3px);
}

.contact-icon {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gradient-blue);
    border-radius: var(--radius-xl);
    color: var(--white);
    font-size: 1.75rem;
    margin: 0 auto 1.25rem;
}

.contact-card h4 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: var(--gray-900);
}

.contact-card p {
    color: var(--gray-600);
    margin-bottom: 0.5rem;
}

.contact-card a {
    color: var(--primary-600);
    font-weight: 600;
    display: inline-block;
    margin-top: 0.75rem;
}

.contact-form {
    background: var(--gray-50);
    padding: 3rem;
    border-radius: var(--radius-2xl);
}

.contact-form h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--gray-900);
}

.form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius-lg);
    font-family: var(--font-body);
    font-size: 1rem;
    transition: all var(--transition-base);
    background: var(--white);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-600);
    box-shadow: 0 0 0 4px var(--primary-50);
}

/* ===== Footer ===== */
.footer {
    background: var(--gray-900);
    color: var(--gray-300);
    padding: 4rem 0 2rem;
}

.footer-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--gray-800);
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 1rem;
}

.footer-logo i {
    color: var(--primary-400);
}

.footer-brand p {
    color: var(--gray-400);
    margin-bottom: 1.5rem;
}

.footer-social {
    display: flex;
    gap: 1rem;
}

.footer-social a {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gray-800);
    border-radius: var(--radius-lg);
    color: var(--gray-300);
    transition: all var(--transition-base);
}

.footer-social a:hover {
    background: var(--primary-600);
    color: var(--white);
    transform: translateY(-3px);
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.footer-column h4 {
    color: var(--white);
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
}

.footer-column a {
    display: block;
    color: var(--gray-400);
    margin-bottom: 0.75rem;
    transition: all var(--transition-base);
}

.footer-column a:hover {
    color: var(--primary-400);
    padding-left: 5px;
}

.footer-bottom {
    padding-top: 2rem;
    text-align: center;
}

.footer-bottom p {
    color: var(--gray-500);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
}

/* ===== Responsive Design ===== */
@media (max-width: 1024px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-visual {
        order: -1;
    }
    
    .hero-title {
        font-size: 3rem;
    }
    
    .hero-subtitle {
        margin: 0 auto 2rem;
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .social-icons {
        justify-content: center;
    }
    
    .about-grid {
        grid-template-columns: 1fr;
    }
    
    .project-card.featured {
        grid-column: span 1;
    }
    
    .resume-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .contact-wrapper {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
}

@media (max-width: 768px) {
    .mobile-toggle {
        display: flex;
    }
    
    .nav-links {
        position: fixed;
        left: -100%;
        top: 76px;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        width: 100%;
        text-align: center;
        transition: all var(--transition-base);
        box-shadow: var(--shadow-xl);
        padding: 2rem 0;
        gap: 0;
    }
    
    .nav-links.active {
        left: 0;
    }
    
    .nav-links li {
        padding: 1rem 0;
    }
    
    .section-title {
        font-size: 2.25rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 1rem;
    }
    
    .stat-divider {
        display: none;
    }
    
    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }
    
    .btn {
        width: 100%;
        justify-content: center;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .skill-cards {
        grid-template-columns: 1fr;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .section-container {
        padding: 4rem 1.5rem;
    }
    
    .nav-container {
        padding: 1.25rem 1.5rem;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .section-title {
        font-size: 1.875rem;
    }
    
    .dashboard-card {
        padding: 1.5rem;
    }
    
    .metrics-row {
        grid-template-columns: 1fr;
    }
}
