/**
 * ULTRA PREMIUM PORTFOLIO - JavaScript Engine
 * Version: 1000% ULTRA
 * Author: Cleopatra Hapsari Admajindra
 */

// ============================================
// PRELOADER WITH ANIMATED PROGRESS
// ============================================
class Preloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.progress = document.querySelector('.preloader-progress');
        this.percentage = document.querySelector('.preloader-percent');
        this.status = document.querySelector('.preloader-status');
        this.messages = [
            'Initializing neural interface...',
            'Loading quantum assets...',
            'Establishing secure connection...',
            'Rendering holographic UI...',
            'Calibrating visual matrix...',
            'System ready.'
        ];
        this.init();
    }

    init() {
        let progress = 0;
        let msgIndex = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 15 + 5;
            if (progress > 100) progress = 100;
            
            this.progress.style.width = `${progress}%`;
            this.percentage.textContent = `${Math.floor(progress)}%`;
            
            if (progress > msgIndex * 20 && msgIndex < this.messages.length) {
                this.status.textContent = this.messages[msgIndex];
                msgIndex++;
            }
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => this.hide(), 500);
            }
        }, 150);
    }

    hide() {
        this.preloader.classList.add('fade-out');
        document.body.classList.add('loaded');
        setTimeout(() => {
            this.preloader.style.display = 'none';
        }, 800);
    }
}

// ============================================
// CUSTOM CURSOR WITH PARTICLE TRAIL
// ============================================
class CustomCursor {
    constructor() {
        this.cursor = document.querySelector('.cursor-outline');
        this.cursorDot = document.querySelector('.cursor-dot');
        this.trailCanvas = document.getElementById('cursor-trail');
        this.ctx = this.trailCanvas?.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.cursorPos = { x: 0, y: 0 };
        this.init();
    }

    init() {
        if (!this.cursor) return;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.addParticle(e.clientX, e.clientY);
        });

        // Hover effects
        const interactiveElements = document.querySelectorAll('a, button, .card, .nav-link, .cta-button, .magnetic-btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-hover');
                this.cursorDot.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-hover');
                this.cursorDot.classList.remove('cursor-hover');
            });
        });

        this.animate();
    }

    resize() {
        this.trailCanvas.width = window.innerWidth;
        this.trailCanvas.height = window.innerHeight;
    }

    addParticle(x, y) {
        const colors = ['#00ffcc', '#ff00aa', '#7b2dff', '#ffcc00'];
        this.particles.push({
            x, y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 3 + 1
        });
        
        if (this.particles.length > 50) {
            this.particles.shift();
        }
    }

    animate() {
        // Smooth cursor follow
        this.cursorPos.x += (this.mouse.x - this.cursorPos.x) * 0.15;
        this.cursorPos.y += (this.mouse.y - this.cursorPos.y) * 0.15;
        
        this.cursor.style.transform = `translate(${this.cursorPos.x}px, ${this.cursorPos.y}px)`;
        this.cursorDot.style.transform = `translate(${this.mouse.x}px, ${this.mouse.y}px)`;

        // Particle trail
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.trailCanvas.width, this.trailCanvas.height);
            
            this.particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.02;
                
                if (p.life > 0) {
                    this.ctx.beginPath();
                    this.ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
                    this.ctx.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, '0');
                    this.ctx.fill();
                }
            });
            
            this.particles = this.particles.filter(p => p.life > 0);
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// PARTICLE CONSTELLATION BACKGROUND
// ============================================
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('matrixRain');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        this.createParticles();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createParticles();
    }

    createParticles() {
        this.particles = [];
        const numberOfParticles = Math.min((this.canvas.width * this.canvas.height) / 12000, 150);
        
        for (let i = 0; i < numberOfParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 0.5,
                color: ['#00ffcc', '#ff00aa', '#7b2dff'][Math.floor(Math.random() * 3)],
                pulse: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((p, i) => {
            // Mouse interaction
            if (this.mouse.x && this.mouse.y) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < this.mouse.radius) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius;
                    p.x -= dx * force * 0.02;
                    p.y -= dy * force * 0.02;
                }
            }
            
            // Movement
            p.x += p.vx;
            p.y += p.vy;
            p.pulse += 0.02;
            
            // Wrap around
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
            
            // Draw particle with pulse
            const pulseSize = p.size + Math.sin(p.pulse) * 0.5;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();
            
            // Connect nearby particles
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(0, 255, 204, ${0.15 * (1 - dist / 120)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// NAVIGATION
// ============================================
class Navigation {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.menuToggle = document.querySelector('.menu-btn');
        this.navLinks = document.querySelector('.nav-links');
        this.navLinksItems = document.querySelectorAll('.nav-link');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        // Scroll behavior
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }
            
            this.lastScroll = currentScroll;
        });

        // Mobile menu
        this.menuToggle?.addEventListener('click', () => {
            this.navLinks.classList.toggle('active');
            this.menuToggle.classList.toggle('active');
        });

        // Close menu on link click
        this.navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                this.navLinks.classList.remove('active');
                this.menuToggle.classList.remove('active');
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ============================================
// ROLE CAROUSEL
// ============================================
class RoleCarousel {
    constructor() {
        this.roles = document.querySelectorAll('.role-item');
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (this.roles.length === 0) return;
        
        setInterval(() => {
            this.roles[this.currentIndex].classList.remove('active');
            this.currentIndex = (this.currentIndex + 1) % this.roles.length;
            this.roles[this.currentIndex].classList.add('active');
        }, 3000);
    }
}

// ============================================
// COUNT UP ANIMATION
// ============================================
class CountUp {
    constructor() {
        this.counters = document.querySelectorAll('.stat-num');
        this.observed = new Set();
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.observed.has(entry.target)) {
                    this.observed.add(entry.target);
                    this.animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const suffix = element.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easeOut);
            
            element.textContent = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right, .scale-in');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.elements.forEach(el => observer.observe(el));
    }
}

// ============================================
// SKILL BARS ANIMATION
// ============================================
class SkillBars {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-progress');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.dataset.progress;
                    entry.target.style.width = width + '%';
                }
            });
        }, { threshold: 0.5 });

        this.skillBars.forEach(bar => observer.observe(bar));
    }
}

// ============================================
// TIMELINE PROGRESS
// ============================================
class TimelineProgress {
    constructor() {
        this.progress = document.querySelector('.timeline-progress');
        this.timeline = document.querySelector('.timeline');
        this.init();
    }

    init() {
        if (!this.progress || !this.timeline) return;

        window.addEventListener('scroll', () => {
            const rect = this.timeline.getBoundingClientRect();
            const timelineHeight = this.timeline.offsetHeight;
            const windowHeight = window.innerHeight;
            
            let progress = 0;
            if (rect.top < windowHeight && rect.bottom > 0) {
                progress = Math.min(Math.max((windowHeight - rect.top) / (timelineHeight + windowHeight) * 100, 0), 100);
            }
            
            this.progress.style.height = `${progress}%`;
        });
    }
}

// ============================================
// MAGNETIC BUTTONS
// ============================================
class MagneticButtons {
    constructor() {
        this.buttons = document.querySelectorAll('.btn-primary, .btn-outline');
        this.init();
    }

    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// ============================================
// 3D TILT EFFECT
// ============================================
class TiltEffect {
    constructor() {
        this.cards = document.querySelectorAll('.card-tilt, .project-card');
        this.init();
    }

    init() {
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(this.cards, {
                max: 15,
                speed: 400,
                glare: true,
                'max-glare': 0.3,
                scale: 1.02
            });
        } else {
            // Fallback tilt effect
            this.cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                });
            });
        }
    }
}

// ============================================
// CARD GLOW EFFECT
// ============================================
class CardGlow {
    constructor() {
        this.cards = document.querySelectorAll('.glow-card, .contact-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                card.style.setProperty('--mouse-x', `${x}%`);
                card.style.setProperty('--mouse-y', `${y}%`);
            });
        });
    }
}

// ============================================
// TEXT SCRAMBLE EFFECT
// ============================================
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.chars[Math.floor(Math.random() * this.chars.length)];
                    this.queue[i].char = char;
                }
                output += `<span class="scramble-char">${char}</span>`;
            } else {
                output += from;
            }
        }
        
        this.el.innerHTML = output;
        
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
}

// ============================================
// DATA STREAM EFFECT
// ============================================
class DataStream {
    constructor() {
        this.container = document.querySelector('.data-stream');
        if (!this.container) return;
        
        this.chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        this.init();
    }

    init() {
        for (let i = 0; i < 20; i++) {
            this.createColumn();
        }
    }

    createColumn() {
        const column = document.createElement('div');
        column.className = 'data-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        column.style.animationDelay = Math.random() * 2 + 's';
        
        let text = '';
        for (let i = 0; i < 20; i++) {
            text += this.chars[Math.floor(Math.random() * this.chars.length)] + '<br>';
        }
        column.innerHTML = text;
        
        this.container.appendChild(column);
        
        // Remove and recreate
        setTimeout(() => {
            column.remove();
            this.createColumn();
        }, 5000);
    }
}

// ============================================
// PARALLAX FLOATING ELEMENTS
// ============================================
class ParallaxFloat {
    constructor() {
        this.elements = document.querySelectorAll('.float-element, .tech-icon');
        this.init();
    }

    init() {
        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            this.elements.forEach(el => {
                const speed = el.dataset.speed || 20;
                const x = mouseX * speed;
                const y = mouseY * speed;
                el.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }
}

// ============================================
// SMOOTH SCROLL REVEAL
// ============================================
class SmoothReveal {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    
                    // Stagger children animations
                    const children = entry.target.querySelectorAll('.stagger-item');
                    children.forEach((child, i) => {
                        child.style.animationDelay = `${i * 0.1}s`;
                        child.classList.add('stagger-visible');
                    });
                }
            });
        }, { threshold: 0.1 });

        this.sections.forEach(section => observer.observe(section));
    }
}

// ============================================
// TYPING EFFECT
// ============================================
class TypingEffect {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ============================================
// AUDIO VISUALIZER (Optional)
// ============================================
class AudioVisualizer {
    constructor() {
        this.bars = document.querySelectorAll('.audio-bar');
        this.init();
    }

    init() {
        this.bars.forEach(bar => {
            this.animateBar(bar);
        });
    }

    animateBar(bar) {
        const animate = () => {
            const height = Math.random() * 80 + 20;
            bar.style.height = height + '%';
            setTimeout(animate, Math.random() * 200 + 100);
        };
        animate();
    }
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Core systems
    new Preloader();
    new CustomCursor();
    new ParticleBackground();
    new Navigation();
    
    // Animations
    new RoleCarousel();
    new CountUp();
    new ScrollAnimations();
    new SkillBars();
    new TimelineProgress();
    
    // Effects
    new MagneticButtons();
    new TiltEffect();
    new CardGlow();
    new DataStream();
    new ParallaxFloat();
    new SmoothReveal();
    
    // Initialize typing effect if element exists
    const typingElement = document.querySelector('.role-text');
    if (typingElement) {
        new TypingEffect(typingElement, [
            'Game Designer',
            'Full-Stack Developer',
            'AI Researcher',
            '2D Artist'
        ]);
    }

    // Initialize text scramble on hover
    document.querySelectorAll('.scramble-hover').forEach(el => {
        const scramble = new TextScramble(el);
        const originalText = el.textContent;
        
        el.addEventListener('mouseenter', () => {
            scramble.setText(originalText);
        });
    });

    // Audio visualizer
    new AudioVisualizer();

    // Reveal animations for .anim-reveal elements
    const animRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                animRevealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.anim-reveal').forEach(el => animRevealObserver.observe(el));

    console.log('%c⬡ ULTRA PORTFOLIO LOADED ⬡', 'color: #00ffcc; font-size: 20px; font-weight: bold;');
    console.log('%cDesigned by Cleopatra Hapsari Admajindra', 'color: #ff00aa; font-size: 12px;');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================
const Utils = {
    lerp: (a, b, n) => (1 - n) * a + n * b,
    
    clamp: (num, min, max) => Math.min(Math.max(num, min), max),
    
    randomRange: (min, max) => Math.random() * (max - min) + min,
    
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle: (func, limit) => {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Preloader,
        CustomCursor,
        ParticleBackground,
        Navigation,
        RoleCarousel,
        CountUp,
        ScrollAnimations,
        SkillBars,
        TimelineProgress,
        MagneticButtons,
        TiltEffect,
        CardGlow,
        TextScramble,
        DataStream,
        ParallaxFloat,
        SmoothReveal,
        TypingEffect,
        Utils
    };
}
