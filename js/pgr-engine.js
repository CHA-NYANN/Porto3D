/**
 * PGR-STYLE PORTFOLIO ENGINE v2.1
 * Fixed: preloader stuck, IntersectionObserver errors
 */

(function() {
    'use strict';

    // ============================================
    // PRELOADER — runs first, self-contained
    // ============================================
    function runPreloader() {
        var el = document.getElementById('preloader');
        var fill = document.getElementById('preloaderFill');
        var pct = document.getElementById('preloaderPct');
        var status = document.getElementById('preloaderStatus');

        if (!el || !fill || !pct || !status) {
            if (el) el.style.display = 'none';
            document.body.classList.add('loaded');
            initApp();
            return;
        }

        var msgs = [
            'INITIALIZING SYSTEM...',
            'LOADING ASSETS...',
            'ESTABLISHING CONNECTION...',
            'RENDERING INTERFACE...',
            'CALIBRATING MATRIX...',
            'SYSTEM READY.'
        ];

        var p = 0;
        var mi = 0;

        var iv = setInterval(function() {
            try {
                p += Math.random() * 15 + 5;
                if (p > 100) p = 100;

                fill.style.width = Math.floor(p) + '%';
                pct.textContent = Math.floor(p) + '%';

                if (p > mi * 20 && mi < msgs.length) {
                    status.textContent = msgs[mi];
                    mi++;
                }

                if (p >= 100) {
                    clearInterval(iv);
                    setTimeout(function() {
                        el.classList.add('hidden');
                        document.body.classList.add('loaded');
                        setTimeout(function() {
                            el.style.display = 'none';
                            initApp();
                        }, 800);
                    }, 500);
                }
            } catch(e) {
                clearInterval(iv);
                el.style.display = 'none';
                document.body.classList.add('loaded');
                initApp();
            }
        }, 120);
    }

    // ============================================
    // PARTICLE CANVAS
    // ============================================
    function initParticles() {
        var canvas = document.getElementById('particleCanvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        if (!ctx) return;

        var particles = [];
        var w, h;

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            createParticles();
        }

        function createParticles() {
            var count = Math.floor((w * h) / 14000);
            particles = [];
            for (var i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    r: Math.random() * 1.3 + 0.3,
                    dx: (Math.random() - 0.5) * 0.25,
                    dy: (Math.random() - 0.5) * 0.25,
                    a: Math.random() * 0.35 + 0.08
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255,255,255,' + p.a + ')';
                ctx.fill();
            }
            requestAnimationFrame(draw);
        }

        resize();
        draw();
        window.addEventListener('resize', resize);
    }

    // ============================================
    // PORTFOLIO NAVIGATION ENGINE
    // ============================================
    function initPortfolio() {
        var wrapper = document.getElementById('sectionsWrapper');
        var sections = document.querySelectorAll('.section');
        var sideLinks = document.querySelectorAll('.side-link');
        var hudTitle = document.getElementById('hudTitle');
        var hudEventL = document.getElementById('hudEventL');
        var hudEventR = document.getElementById('hudEventR');
        var hudPageCur = document.getElementById('hudPageCur');
        var scrollHint = document.getElementById('scrollHint');

        if (!wrapper || sections.length === 0) return;

        var totalSections = sections.length;
        var currentIndex = 0;
        var countersAnimated = false;

        var sectionTitles = [];
        sideLinks.forEach(function(link) {
            sectionTitles.push(link.getAttribute('data-title') || '');
        });

        // Scroll-based section detection (replaces IntersectionObserver — more reliable)
        function onScroll() {
            var scrollTop = wrapper.scrollTop;
            var winH = wrapper.clientHeight;

            for (var i = 0; i < sections.length; i++) {
                var top = sections[i].offsetTop;
                var h = sections[i].offsetHeight;
                if (scrollTop >= top - winH * 0.45 && scrollTop < top + h - winH * 0.45) {
                    if (i !== currentIndex) {
                        currentIndex = i;
                        updateUI(i);
                    }
                    activateSection(i);
                    break;
                }
            }
        }

        wrapper.addEventListener('scroll', onScroll, { passive: true });

        function activateSection(idx) {
            var s = sections[idx];
            if (!s || s.classList.contains('active')) return;
            s.classList.add('active');

            var anims = s.querySelectorAll('.anim-in');
            for (var j = 0; j < anims.length; j++) {
                (function(el, delay) {
                    setTimeout(function() { el.classList.add('visible'); }, delay);
                })(anims[j], j * 100);
            }

            if (s.id === 'skills') {
                s.querySelectorAll('.skill-fill').forEach(function(bar) {
                    var w = bar.getAttribute('data-w');
                    if (w) bar.style.width = w + '%';
                });
            }

            if (idx === 0) animateCounters();
        }

        function updateUI(idx) {
            sideLinks.forEach(function(l, i) {
                if (i === idx) l.classList.add('active');
                else l.classList.remove('active');
            });

            var title = sectionTitles[idx] || 'HOME';
            if (hudTitle) hudTitle.textContent = title;

            var secNum = String(idx + 1).padStart(2, '0');
            if (hudEventL) hudEventL.textContent = 'SECTION ' + secNum;
            if (hudEventR) hudEventR.textContent = 'SECTION ' + secNum + ' /';
            if (hudPageCur) hudPageCur.textContent = secNum;

            if (scrollHint) scrollHint.style.opacity = idx === 0 ? '1' : '0';
        }

        function goToSection(idx) {
            if (idx < 0 || idx >= totalSections) return;
            var target = sections[idx];
            if (!target) return;
            wrapper.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
        }

        function animateCounters() {
            if (countersAnimated) return;
            countersAnimated = true;
            document.querySelectorAll('.stat-num[data-count]').forEach(function(el) {
                var target = parseInt(el.getAttribute('data-count')) || 0;
                var current = 0;
                var step = Math.max(1, Math.floor(target / 30));
                var iv = setInterval(function() {
                    current += step;
                    if (current >= target) { current = target; clearInterval(iv); }
                    el.textContent = current;
                }, 40);
            });
        }

        // Nav clicks
        sideLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                goToSection(parseInt(link.getAttribute('data-section')));
            });
        });

        // [data-goto] buttons
        document.querySelectorAll('[data-goto]').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                goToSection(parseInt(btn.getAttribute('data-goto')));
            });
        });

        // Keyboard
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goToSection(currentIndex + 1); }
            else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); goToSection(currentIndex - 1); }
            else if (e.key === 'Home') { e.preventDefault(); goToSection(0); }
            else if (e.key === 'End') { e.preventDefault(); goToSection(totalSections - 1); }
        });

        // Activate first section
        activateSection(0);
        updateUI(0);
    }

    // ============================================
    // HAMBURGER
    // ============================================
    function initHamburger() {
        var btn = document.getElementById('hamburger');
        var nav = document.querySelector('.side-nav-links');
        if (!btn || !nav) return;
        btn.addEventListener('click', function() {
            nav.classList.toggle('open');
            btn.classList.toggle('active');
        });
    }

    // ============================================
    // GLITCH EFFECT
    // ============================================
    function initGlitch() {
        var title = document.querySelector('.giant-name');
        if (!title) return;
        var style = document.createElement('style');
        style.textContent = '@keyframes glitchText{0%{text-shadow:2px 0 #e63946,-2px 0 #60a5fa;transform:translate(0)}20%{text-shadow:-3px 0 #e63946,3px 0 #60a5fa;transform:translate(-2px,1px)}40%{text-shadow:3px 0 #e63946,-3px 0 #60a5fa;transform:translate(2px,-1px)}60%{text-shadow:-1px 0 #e63946,1px 0 #60a5fa;transform:translate(1px,0)}80%{text-shadow:2px 0 #e63946,-2px 0 #60a5fa;transform:translate(-1px,1px)}100%{text-shadow:none;transform:translate(0)}}';
        document.head.appendChild(style);
        title.addEventListener('mouseenter', function() {
            title.style.animation = 'glitchText 0.3s ease';
            setTimeout(function() { title.style.animation = ''; }, 300);
        });
    }

    // ============================================
    // INIT APP (after preloader finishes)
    // ============================================
    function initApp() {
        try { initPortfolio(); } catch(e) { console.warn('Portfolio init error:', e); }
        try { initHamburger(); } catch(e) {}
        try { initGlitch(); } catch(e) {}
    }

    // ============================================
    // BOOT
    // ============================================
    function boot() {
        try { initParticles(); } catch(e) { console.warn('Particles error:', e); }
        runPreloader();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }

})();
