/**
 * PGR-STYLE PORTFOLIO ENGINE v2.2
 * Preloader is handled inline in HTML.
 * This file: particles, portfolio nav, animations.
 */

(function() {
    'use strict';

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
            create();
        }

        function create() {
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
    // PORTFOLIO NAVIGATION
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
        for (var i = 0; i < sideLinks.length; i++) {
            sectionTitles.push(sideLinks[i].getAttribute('data-title') || '');
        }

        // Scroll-based section detection
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

            if (s.id === 'skills' || s.id === 'data') {
                var fills = s.querySelectorAll('.skill-fill, .data-stat-fill');
                for (var k = 0; k < fills.length; k++) {
                    var w = fills[k].getAttribute('data-w');
                    if (w) fills[k].style.width = w + '%';
                }
            }

            if (idx === 0) animateCounters();
            if (s.id === 'data') animateRadar();
        }

        function pad2(n) {
            return n < 10 ? '0' + n : '' + n;
        }

        function animateRadar() {
            var poly = document.getElementById('radarData');
            if (!poly) return;

            // Stats: 0-1 scale per axis (WEB, GAME, ART, AI/ML, UI/UX, WRITING, 3D/VFX, RESEARCH)
            var stats = [0.97, 0.88, 0.92, 0.84, 0.75, 0.72, 0.60, 0.82];

            // Outer octagon vertices (full = 1.0)
            var cx = 130, cy = 110;
            var full = [
                [130,30],[185,55],[210,110],[185,165],
                [130,190],[75,165],[50,110],[75,55]
            ];

            // Compute scaled points
            function calcPoints(t) {
                return full.map(function(p, i) {
                    var s = stats[i] * t;
                    var x = cx + (p[0] - cx) * s;
                    var y = cy + (p[1] - cy) * s;
                    return x.toFixed(1) + ',' + y.toFixed(1);
                }).join(' ');
            }

            // Animate from 0 → 1 over 1000ms
            var start = null;
            var dur = 1000;
            function step(ts) {
                if (!start) start = ts;
                var t = Math.min((ts - start) / dur, 1);
                var ease = 1 - Math.pow(1 - t, 3);
                poly.setAttribute('points', calcPoints(ease));
                if (t < 1) requestAnimationFrame(step);
                else poly.classList.add('animate');
            }
            requestAnimationFrame(step);
        }

        function updateUI(idx) {
            for (var i = 0; i < sideLinks.length; i++) {
                if (i === idx) sideLinks[i].classList.add('active');
                else sideLinks[i].classList.remove('active');
            }
            var title = sectionTitles[idx] || 'HOME';
            if (hudTitle) hudTitle.textContent = title;
            var num = pad2(idx + 1);
            if (hudEventL) hudEventL.textContent = 'SECTION ' + num;
            if (hudEventR) hudEventR.textContent = 'SECTION ' + num + ' /';
            if (hudPageCur) hudPageCur.textContent = num;
            if (scrollHint) scrollHint.style.opacity = idx === 0 ? '1' : '0';
        }

        function goToSection(idx) {
            if (idx < 0 || idx >= totalSections) return;
            wrapper.scrollTo({ top: sections[idx].offsetTop, behavior: 'smooth' });
        }

        function animateCounters() {
            if (countersAnimated) return;
            countersAnimated = true;
            var counters = document.querySelectorAll('.stat-num[data-count]');
            for (var i = 0; i < counters.length; i++) {
                (function(el) {
                    var target = parseInt(el.getAttribute('data-count')) || 0;
                    var cur = 0;
                    var step = Math.max(1, Math.floor(target / 30));
                    var iv = setInterval(function() {
                        cur += step;
                        if (cur >= target) { cur = target; clearInterval(iv); }
                        el.textContent = cur;
                    }, 40);
                })(counters[i]);
            }
        }

        // Nav clicks
        for (var i = 0; i < sideLinks.length; i++) {
            (function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    goToSection(parseInt(link.getAttribute('data-section')));
                });
            })(sideLinks[i]);
        }

        // [data-goto] buttons
        var gotos = document.querySelectorAll('[data-goto]');
        for (var i = 0; i < gotos.length; i++) {
            (function(btn) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    goToSection(parseInt(btn.getAttribute('data-goto')));
                });
            })(gotos[i]);
        }

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
        var sideNav = document.querySelector('.side-nav');
        if (!btn || !nav) return;

        function closeNav() {
            nav.classList.remove('open');
            btn.classList.remove('active');
            if (sideNav) sideNav.classList.remove('nav-open');
        }

        btn.addEventListener('click', function() {
            var isOpen = nav.classList.toggle('open');
            btn.classList.toggle('active');
            if (sideNav) sideNav.classList.toggle('nav-open');
        });

        // Close nav when clicking the scrim (outside panel)
        document.addEventListener('click', function(e) {
            if (nav.classList.contains('open') &&
                !nav.contains(e.target) &&
                e.target !== btn &&
                !btn.contains(e.target)) {
                closeNav();
            }
        });
    }

    // ============================================
    // GLITCH EFFECT
    // ============================================
    function initGlitch() {
        var title = document.querySelector('.giant-name');
        if (!title) return;
        var s = document.createElement('style');
        s.textContent = '@keyframes glitchText{0%{text-shadow:2px 0 #5b8cff,-2px 0 #a78bfa;transform:translate(0)}20%{text-shadow:-3px 0 #5b8cff,3px 0 #a78bfa;transform:translate(-2px,1px)}40%{text-shadow:3px 0 #5b8cff,-3px 0 #a78bfa;transform:translate(2px,-1px)}60%{text-shadow:-1px 0 #5b8cff,1px 0 #a78bfa;transform:translate(1px,0)}80%{text-shadow:2px 0 #5b8cff,-2px 0 #a78bfa;transform:translate(-1px,1px)}100%{text-shadow:none;transform:translate(0)}}';
        document.head.appendChild(s);
        title.addEventListener('mouseenter', function() {
            title.style.animation = 'glitchText 0.3s ease';
            setTimeout(function() { title.style.animation = ''; }, 300);
        });
    }

    // ============================================
    // BOOT — wait for DOM then init everything
    // ============================================
    function boot() {
        try { initParticles(); } catch(e) { console.warn('Particles:', e); }
        try { initPortfolio(); } catch(e) { console.warn('Portfolio:', e); }
        try { initHamburger(); } catch(e) {}
        try { initGlitch(); } catch(e) {}
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }

})();
