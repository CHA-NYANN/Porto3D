/**
 * PGR-STYLE PORTFOLIO ENGINE
 * Fullscreen section scroll, HUD updates, particle canvas, reveal animations
 */

// ============================================
// PRELOADER
// ============================================
class Preloader {
    constructor() {
        this.el = document.getElementById('preloader');
        this.fill = document.getElementById('preloaderFill');
        this.pct = document.getElementById('preloaderPct');
        this.status = document.getElementById('preloaderStatus');
        this.msgs = [
            'INITIALIZING SYSTEM...',
            'LOADING ASSETS...',
            'ESTABLISHING CONNECTION...',
            'RENDERING INTERFACE...',
            'CALIBRATING MATRIX...',
            'SYSTEM READY.'
        ];
        this.run();
    }
    run() {
        let p = 0, mi = 0;
        const iv = setInterval(() => {
            p += Math.random() * 15 + 5;
            if (p > 100) p = 100;
            this.fill.style.width = p + '%';
            this.pct.textContent = Math.floor(p) + '%';
            if (p > mi * 20 && mi < this.msgs.length) {
                this.status.textContent = this.msgs[mi];
                mi++;
            }
            if (p >= 100) {
                clearInterval(iv);
                setTimeout(() => this.hide(), 600);
            }
        }, 120);
    }
    hide() {
        this.el.classList.add('hidden');
        document.body.style.overflow = '';
        setTimeout(() => {
            this.el.style.display = 'none';
            // Trigger initial section animations
            window.portfolio?.activateSection(0);
        }, 800);
    }
}

// ============================================
// PARTICLE CANVAS (floating dots like PGR)
// ============================================
class ParticleField {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }
    resize() {
        this.w = this.canvas.width = window.innerWidth;
        this.h = this.canvas.height = window.innerHeight;
    }
    init() {
        const count = Math.floor((this.w * this.h) / 12000);
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.w,
                y: Math.random() * this.h,
                r: Math.random() * 1.5 + 0.3,
                dx: (Math.random() - 0.5) * 0.3,
                dy: (Math.random() - 0.5) * 0.3,
                a: Math.random() * 0.4 + 0.1
            });
        }
    }
    animate() {
        this.ctx.clearRect(0, 0, this.w, this.h);
        for (const p of this.particles) {
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0) p.x = this.w;
            if (p.x > this.w) p.x = 0;
            if (p.y < 0) p.y = this.h;
            if (p.y > this.h) p.y = 0;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${p.a})`;
            this.ctx.fill();
        }
        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// PORTFOLIO NAVIGATION ENGINE
// ============================================
class Portfolio {
    constructor() {
        this.wrapper = document.getElementById('sectionsWrapper');
        this.sections = document.querySelectorAll('.section');
        this.sideLinks = document.querySelectorAll('.side-link');
        this.hudTitle = document.getElementById('hudTitle');
        this.hudEventL = document.getElementById('hudEventL');
        this.hudEventR = document.getElementById('hudEventR');
        this.hudPageCur = document.getElementById('hudPageCur');
        this.scrollHint = document.getElementById('scrollHint');
        this.totalSections = this.sections.length;
        this.currentIndex = 0;
        this.isScrolling = false;

        this.sectionTitles = [];
        this.sideLinks.forEach(link => {
            this.sectionTitles.push(link.dataset.title);
        });

        this.setupScrollObserver();
        this.setupNavClicks();
        this.setupButtonClicks();
        this.setupKeyboard();
        this.setupCounters();
    }

    setupScrollObserver() {
        // Use IntersectionObserver to detect which section is visible
        const options = {
            root: this.wrapper,
            threshold: 0.55
        };
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const idx = parseInt(entry.target.dataset.index);
                    if (idx !== this.currentIndex) {
                        this.currentIndex = idx;
                        this.updateUI(idx);
                    }
                    this.activateSection(idx);
                }
            });
        }, options);

        this.sections.forEach(s => this.observer.observe(s));
    }

    activateSection(idx) {
        // Mark section as active and trigger animations
        this.sections.forEach((s, i) => {
            if (i === idx) {
                s.classList.add('active');
                // Reveal .anim-in elements
                const anims = s.querySelectorAll('.anim-in');
                anims.forEach((el, j) => {
                    setTimeout(() => el.classList.add('visible'), j * 100);
                });
                // Trigger skill bar fills
                if (s.id === 'skills') {
                    s.querySelectorAll('.skill-fill').forEach(bar => {
                        bar.style.width = bar.dataset.w + '%';
                    });
                }
            }
        });
        // Counter animation for home
        if (idx === 0) this.animateCounters();
        this.updateUI(idx);
    }

    updateUI(idx) {
        // Side nav
        this.sideLinks.forEach((l, i) => {
            l.classList.toggle('active', i === idx);
        });

        // HUD title
        const title = this.sectionTitles[idx] || 'HOME';
        if (this.hudTitle) this.hudTitle.textContent = title;

        // HUD events
        const secNum = String(idx + 1).padStart(2, '0');
        if (this.hudEventL) this.hudEventL.textContent = `SECTION ${secNum}`;
        if (this.hudEventR) this.hudEventR.textContent = `SECTION ${secNum} /`;
        if (this.hudPageCur) this.hudPageCur.textContent = secNum;

        // Scroll hint
        if (this.scrollHint) {
            this.scrollHint.style.opacity = idx === 0 ? '1' : '0';
        }
    }

    goToSection(idx) {
        if (idx < 0 || idx >= this.totalSections) return;
        const target = this.sections[idx];
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setupNavClicks() {
        this.sideLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const idx = parseInt(link.dataset.section);
                this.goToSection(idx);
            });
        });
    }

    setupButtonClicks() {
        document.querySelectorAll('[data-goto]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const idx = parseInt(btn.dataset.goto);
                this.goToSection(idx);
            });
        });
    }

    setupKeyboard() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                this.goToSection(this.currentIndex + 1);
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                this.goToSection(this.currentIndex - 1);
            } else if (e.key === 'Home') {
                e.preventDefault();
                this.goToSection(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                this.goToSection(this.totalSections - 1);
            }
        });
    }

    setupCounters() {
        this.countersAnimated = false;
    }

    animateCounters() {
        if (this.countersAnimated) return;
        this.countersAnimated = true;
        document.querySelectorAll('.stat-num[data-count]').forEach(el => {
            const target = parseInt(el.dataset.count);
            let current = 0;
            const step = Math.max(1, Math.floor(target / 30));
            const iv = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(iv);
                }
                el.textContent = current;
            }, 40);
        });
    }
}

// ============================================
// HAMBURGER (mobile placeholder)
// ============================================
function setupHamburger() {
    const btn = document.getElementById('hamburger');
    const nav = document.querySelector('.side-nav-links');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
        nav.classList.toggle('open');
        btn.classList.toggle('active');
    });
}

// ============================================
// GLITCH EFFECT on title hover (subtle)
// ============================================
function setupGlitch() {
    const title = document.querySelector('.giant-name');
    if (!title) return;
    title.addEventListener('mouseenter', () => {
        title.style.animation = 'glitchText 0.3s ease';
        setTimeout(() => title.style.animation = '', 300);
    });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    new Preloader();
    new ParticleField();
    window.portfolio = new Portfolio();
    setupHamburger();
    setupGlitch();
});

// Glitch keyframes (added via JS for cleanliness)
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
@keyframes glitchText {
    0% { text-shadow: 2px 0 #e63946, -2px 0 #60a5fa; transform: translate(0); }
    20% { text-shadow: -3px 0 #e63946, 3px 0 #60a5fa; transform: translate(-2px, 1px); }
    40% { text-shadow: 3px 0 #e63946, -3px 0 #60a5fa; transform: translate(2px, -1px); }
    60% { text-shadow: -1px 0 #e63946, 1px 0 #60a5fa; transform: translate(1px, 0); }
    80% { text-shadow: 2px 0 #e63946, -2px 0 #60a5fa; transform: translate(-1px, 1px); }
    100% { text-shadow: none; transform: translate(0); }
}`;
document.head.appendChild(glitchStyle);
