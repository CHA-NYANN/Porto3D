/* =====================================================
   CLEOPATRA PORTFOLIO - INTERNATIONALIZATION (i18n)
   Supports: Indonesian (ID) & English (EN)
   ===================================================== */

const translations = {
    id: {
        // Navigation
        'nav.about': 'TENTANG',
        'nav.skills': 'KEAHLIAN',
        'nav.experience': 'PENGALAMAN',
        'nav.artwork': 'ARTWORK',
        'nav.projects': 'PROYEK',
        'nav.contact': 'KONTAK',
        
        // Hero
        'hero.status': 'TERSEDIA UNTUK KERJA',
        'hero.hello': 'Halo, Saya',
        'hero.role1': 'Game Designer',
        'hero.role2': 'AI Researcher',
        'hero.role3': '2D Artist',
        'hero.role4': 'Full-stack Developer',
        'hero.desc': 'Menciptakan pengalaman digital yang immersive melalui game design, AI research, dan development. Berbasis di Indonesia.',
        'hero.cta1': 'LIHAT PROYEK',
        'hero.cta2': 'HUBUNGI SAYA',
        'hero.stat1': 'Tahun Berkarya',
        'hero.stat2': 'Proyek Selesai',
        'hero.stat3': 'Penghargaan',
        
        // About
        'about.title': 'TENTANG SAYA',
        'about.p1': 'Saya Cleopatra Hapsari Admajindra, mahasiswa Computer Science di Universitas Dian Nuswantoro dengan passion besar di game design, AI research, dan digital art.',
        'about.p2': 'Perjalanan saya dimulai dari 2D illustration sejak 2018, berkembang ke game development, dan kini merambah AI research. Saya percaya bahwa kreativitas dan teknologi bisa berjalan beriringan untuk menciptakan pengalaman yang memorable.',
        'about.p3': '• Author & Presenter di ICIMCIS 2025 (IEEE)<br>• 1st Place Conventional Manga DINUSFEST 2021<br>• 2nd Place ACGN Writing Competition<br>• Published Research on AI in Games',
        'about.edu': 'PENDIDIKAN',
        'about.loc': 'LOKASI',
        'about.focus': 'FOKUS RISET',
        'about.current': 'SAAT INI',
        
        // Skills
        'skills.title': 'KEAHLIAN',
        'skills.game': 'Game Development',
        'skills.web': 'Web Development',
        'skills.art': 'Digital Art',
        'skills.ai': 'AI & Research',
        'skills.mobile': 'Mobile & Others',
        'skills.creative': 'Creative Writing',
        
        // Experience
        'exp.title': 'PENGALAMAN',
        'exp.ophius': 'Mendesain level dan narasi untuk game debut studio, termasuk gameplay flow, pacing, dan player progression. Menulis dan memelihara Game Design Document (GDD).',
        'exp.taiwan': 'Riset kolaborasi internasional tentang AI, LLM/SLM dalam game strategi. Co-author paper "Context-Aware Small Language Models for Real Time Strategy Prediction" di ICIMCIS 2025.',
        'exp.gemastik': 'Memimpin tim 3 orang dalam mengembangkan educational simulation game. Mengelola timeline proyek, kontribusi visual design termasuk UI dan character assets.',
        'exp.artist': 'Menyediakan jasa ilustrasi karakter anime-style termasuk OC, fanart, dan game concept art. Memenangkan beberapa kompetisi ilustrasi tingkat nasional.',
        'exp.cta': 'LIHAT SEMUA PROYEK',
        
        // Featured
        'featured.title': 'PROYEK UNGGULAN',
        'featured.inkura': 'Platform full-stack untuk membaca dan upload komik, novel, dan film.',
        'featured.ophius': 'Website studio game dengan 3D galaxy interactive experience.',
        'featured.sumobot': 'Game riset AI dengan paper published di IEEE ICIMCIS 2025.',
        'featured.view': 'KUNJUNGI SITE',
        'featured.paper': 'BACA PAPER',
        'featured.all_projects': 'Semua Proyek Web',
        'featured.all_art': 'Galeri Artwork',
        
        // Contact
        'contact.title': 'HUBUNGI SAYA',
        'contact.intro': 'Tertarik berkolaborasi atau punya proyek menarik? Jangan ragu untuk menghubungi saya!',
        
        // Footer
        'footer.note': 'Dibuat dengan <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" style="display:inline-block;vertical-align:-0.15em;"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> dan banyak kopi',
        
        // Artwork Page
        'artwork.title': 'GALERI ARTWORK',
        'artwork.subtitle': 'Koleksi ilustrasi dan karya seni digital saya',
        'artwork.filter.all': 'Semua',
        'artwork.filter.character': 'Karakter',
        'artwork.filter.illustration': 'Ilustrasi',
        'artwork.filter.concept': 'Concept Art',
        'artwork.filter.fanart': 'Fanart',
        'artwork.cta': 'Lihat lebih banyak di Instagram',
        'artwork.back': 'Kembali ke Beranda',
        
        // Projects Page
        'projects.title': 'PROYEK WEB',
        'projects.subtitle': 'Koleksi proyek web development yang telah saya kerjakan',
        'projects.filter.all': 'Semua',
        'projects.filter.fullstack': 'Full-stack',
        'projects.filter.frontend': 'Frontend',
        'projects.filter.research': 'Research',
        'projects.view': 'KUNJUNGI SITE',
        'projects.github': 'GITHUB',
        'projects.paper': 'BACA PAPER',
        'projects.back': 'Kembali ke Beranda'
    },
    
    en: {
        // Navigation
        'nav.about': 'ABOUT',
        'nav.skills': 'SKILLS',
        'nav.experience': 'EXPERIENCE',
        'nav.artwork': 'ARTWORK',
        'nav.projects': 'PROJECTS',
        'nav.contact': 'CONTACT',
        
        // Hero
        'hero.status': 'AVAILABLE FOR WORK',
        'hero.hello': "Hi, I'm",
        'hero.role1': 'Game Designer',
        'hero.role2': 'AI Researcher',
        'hero.role3': '2D Artist',
        'hero.role4': 'Full-stack Developer',
        'hero.desc': 'Creating immersive digital experiences through game design, AI research, and development. Based in Indonesia.',
        'hero.cta1': 'VIEW PROJECTS',
        'hero.cta2': 'CONTACT ME',
        'hero.stat1': 'Years Creating',
        'hero.stat2': 'Projects Done',
        'hero.stat3': 'Awards',
        
        // About
        'about.title': 'ABOUT ME',
        'about.p1': "I'm Cleopatra Hapsari Admajindra, a Computer Science student at Universitas Dian Nuswantoro with a strong passion for game design, AI research, and digital art.",
        'about.p2': 'My journey started with 2D illustration since 2018, evolved into game development, and now ventures into AI research. I believe creativity and technology can work together to create memorable experiences.',
        'about.p3': '• Author & Presenter at ICIMCIS 2025 (IEEE)<br>• 1st Place Conventional Manga DINUSFEST 2021<br>• 2nd Place ACGN Writing Competition<br>• Published Research on AI in Games',
        'about.edu': 'EDUCATION',
        'about.loc': 'LOCATION',
        'about.focus': 'RESEARCH FOCUS',
        'about.current': 'CURRENT',
        
        // Skills
        'skills.title': 'SKILLS',
        'skills.game': 'Game Development',
        'skills.web': 'Web Development',
        'skills.art': 'Digital Art',
        'skills.ai': 'AI & Research',
        'skills.mobile': 'Mobile & Others',
        'skills.creative': 'Creative Writing',
        
        // Experience
        'exp.title': 'EXPERIENCE',
        'exp.ophius': "Designing levels and narratives for the studio's debut game, including gameplay flow, pacing, and player progression. Writing and maintaining Game Design Document (GDD).",
        'exp.taiwan': 'International collaborative research on AI, LLM/SLM in strategy games. Co-authored paper "Context-Aware Small Language Models for Real Time Strategy Prediction" at ICIMCIS 2025.',
        'exp.gemastik': 'Led a 3-member team in developing an educational simulation game. Managed project timeline, contributed to visual design including UI and character assets.',
        'exp.artist': 'Providing anime-style character illustration services including OC, fanart, and game concept art. Won multiple national-level illustration competitions.',
        'exp.cta': 'VIEW ALL PROJECTS',
        
        // Featured
        'featured.title': 'FEATURED PROJECTS',
        'featured.inkura': 'Full-stack platform for reading and uploading comics, novels, and films.',
        'featured.ophius': 'Game studio website with 3D galaxy interactive experience.',
        'featured.sumobot': 'AI research game with paper published at IEEE ICIMCIS 2025.',
        'featured.view': 'VISIT SITE',
        'featured.paper': 'READ PAPER',
        'featured.all_projects': 'All Web Projects',
        'featured.all_art': 'Artwork Gallery',
        
        // Contact
        'contact.title': 'CONTACT ME',
        'contact.intro': "Interested in collaborating or have an exciting project? Don't hesitate to reach out!",
        
        // Footer
        'footer.note': 'Made with 💜 and lots of coffee',
        
        // Artwork Page
        'artwork.title': 'ARTWORK GALLERY',
        'artwork.subtitle': 'Collection of my illustrations and digital artworks',
        'artwork.filter.all': 'All',
        'artwork.filter.character': 'Character',
        'artwork.filter.illustration': 'Illustration',
        'artwork.filter.concept': 'Concept Art',
        'artwork.filter.fanart': 'Fanart',
        'artwork.cta': 'See more on Instagram',
        'artwork.back': 'Back to Home',
        
        // Projects Page
        'projects.title': 'WEB PROJECTS',
        'projects.subtitle': 'Collection of web development projects I have worked on',
        'projects.filter.all': 'All',
        'projects.filter.fullstack': 'Full-stack',
        'projects.filter.frontend': 'Frontend',
        'projects.filter.research': 'Research',
        'projects.view': 'VISIT SITE',
        'projects.github': 'GITHUB',
        'projects.paper': 'READ PAPER',
        'projects.back': 'Back to Home'
    }
};

// Current language
let currentLang = localStorage.getItem('portfolio-lang') || 'id';

// Initialize i18n
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initLanguageToggle();
});

function initLanguage() {
    document.documentElement.setAttribute('data-lang', currentLang);
    updateAllTranslations();
    updateToggleDisplay();
}

function initLanguageToggle() {
    const toggleBtn = document.getElementById('langToggle');
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('portfolio-lang', currentLang);
        document.documentElement.setAttribute('data-lang', currentLang);
        updateAllTranslations();
        updateToggleDisplay();
    });
}

function updateToggleDisplay() {
    const toggleBtn = document.getElementById('langToggle');
    if (!toggleBtn) return;
    
    const activeSpan = toggleBtn.querySelector('.lang-active');
    const inactiveSpan = toggleBtn.querySelector('.lang-inactive');
    
    if (currentLang === 'id') {
        activeSpan.textContent = 'ID';
        inactiveSpan.textContent = 'EN';
    } else {
        activeSpan.textContent = 'EN';
        inactiveSpan.textContent = 'ID';
    }
}

function updateAllTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[currentLang][key];
        
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.innerHTML = translation;
            }
        }
    });
    
    // Update page title based on current page
    updatePageTitle();
}

function updatePageTitle() {
    const path = window.location.pathname;
    let title = 'Cleopatra Hapsari • ';
    
    if (path.includes('artwork')) {
        title += currentLang === 'id' ? 'Galeri Artwork' : 'Artwork Gallery';
    } else if (path.includes('projects')) {
        title += currentLang === 'id' ? 'Proyek Web' : 'Web Projects';
    } else {
        title += 'Game Designer & Developer';
    }
    
    document.title = title;
}

// Expose function globally for dynamic content
window.t = function(key) {
    return translations[currentLang][key] || key;
};

window.getCurrentLang = function() {
    return currentLang;
};
