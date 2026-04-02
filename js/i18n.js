/**
 * ULTRA PORTFOLIO - Internationalization System
 * Supports: Indonesian (ID) & English (EN)
 */

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Journey',
        'nav.projects': 'Projects',
        'nav.awards': 'Awards',
        'nav.contact': 'Contact',
        'nav.artwork': 'Artwork',
        'nav.webprojects': 'Web Projects',
        
        // Hero Section
        'hero.greeting': 'Hello, World!',
        'hero.intro': "I'm",
        'hero.name': 'Cleopatra Hapsari',
        'hero.tagline': 'Crafting Digital Experiences at the Intersection of Art & Technology',
        'hero.cta.projects': 'View Projects',
        'hero.cta.contact': 'Contact Me',
        'hero.scroll': 'Scroll to Explore',
        
        // Roles
        'role.gamedesigner': 'Game Designer',
        'role.fullstack': 'Full-Stack Developer',
        'role.airesearcher': 'AI Researcher',
        'role.artist': '2D Artist',
        
        // About Section
        'about.title': 'About Me',
        'about.subtitle': 'Who Am I?',
        'about.description': 'A multidisciplinary creative technologist from Semarang, Indonesia. I blend artistic vision with technical expertise to create immersive digital experiences. Currently pursuing Computer Science at Universitas Dian Nuswantoro with a GPA of 3.73.',
        'about.passion': 'My passion lies in game development, AI research, and creating beautiful user interfaces that tell stories.',
        
        // Stats
        'stats.experience': 'Years Experience',
        'stats.projects': 'Projects Completed',
        'stats.awards': 'Awards Won',
        'stats.clients': 'Happy Clients',
        
        // Skills Section
        'skills.title': 'Skills & Arsenal',
        'skills.subtitle': 'Technologies I Command',
        'skills.gamedev': 'Game Development',
        'skills.webdev': 'Web Development',
        'skills.aiml': 'AI & Machine Learning',
        'skills.design': 'Design & Art',
        
        // Experience Section
        'experience.title': 'Journey & Experience',
        'experience.subtitle': 'My Professional Path',
        'experience.present': 'Present',
        
        // Experience Items
        'exp.ophius.title': 'Game Designer',
        'exp.ophius.company': 'Ophius Studio',
        'exp.ophius.date': '2024 - Present',
        'exp.ophius.desc': 'Leading game design initiatives, creating immersive gameplay experiences and narrative systems for indie game projects.',
        
        'exp.igs.title': 'AI Research Intern',
        'exp.igs.company': 'IGS & NTUST Taiwan',
        'exp.igs.date': '2024 - 2025',
        'exp.igs.desc': 'Conducted research on AI-powered robotics, specifically Sumobot autonomous systems using computer vision and machine learning.',
        
        'exp.gemastik.title': 'Lead Developer',
        'exp.gemastik.company': 'Feiren Team - GEMASTIK 2025',
        'exp.gemastik.date': '2025',
        'exp.gemastik.desc': 'Developing innovative solutions for national technology competition, focusing on cutting-edge software development.',
        
        'exp.freelance.title': 'Freelance 2D Artist',
        'exp.freelance.company': 'Self-Employed',
        'exp.freelance.date': '2018 - Present',
        'exp.freelance.desc': 'Creating digital illustrations, character designs, and visual assets for various clients worldwide.',
        
        'exp.fullstack.title': 'Full-Stack Developer',
        'exp.fullstack.company': 'Various Projects',
        'exp.fullstack.date': '2023 - Present',
        'exp.fullstack.desc': 'Building modern web applications using React, Next.js, and Node.js for startups and established businesses.',
        
        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Recent Works',
        'projects.viewall': 'View All Projects',
        'projects.viewlive': 'View Live',
        'projects.viewcode': 'View Code',
        
        // Project Items
        'project.inkura.title': 'Inkura',
        'project.inkura.desc': 'A comprehensive digital manga platform built with modern web technologies, featuring reading, publishing, and community features.',
        'project.inkura.tags': 'Next.js, React, Prisma, TypeScript',
        
        'project.ophius.title': 'Ophius Studio',
        'project.ophius.desc': 'Official website for indie game studio showcasing projects, team, and development blog with stunning visuals.',
        'project.ophius.tags': 'React, Three.js, GSAP, Vercel',
        
        'project.sumobot.title': 'Sumobot AI',
        'project.sumobot.desc': 'Autonomous sumobot system using computer vision and machine learning, published in IEEE ICIMCIS 2025.',
        'project.sumobot.tags': 'Python, OpenCV, TensorFlow, Arduino',
        
        'project.siakad.title': 'SIAKAD UDINUS',
        'project.siakad.desc': 'Academic information system for Universitas Dian Nuswantoro, handling student data, grades, and scheduling.',
        'project.siakad.tags': 'PHP, Laravel, MySQL, Bootstrap',
        
        // Awards Section
        'awards.title': 'Awards & Recognition',
        'awards.subtitle': 'Achievements Unlocked',
        
        // Award Items
        'award.manga.title': '1st Place - Manga Competition',
        'award.manga.event': 'DINUSFEST 2021',
        'award.manga.desc': 'Won first place in the manga drawing competition, showcasing artistic skills and storytelling ability.',
        
        'award.acgn.title': '2nd Place - ACGN Writing',
        'award.acgn.event': 'ACGN Competition 2022',
        'award.acgn.desc': 'Recognized for creative writing excellence in anime, comic, game, and novel category.',
        
        'award.ieee.title': 'Published Research Paper',
        'award.ieee.event': 'IEEE ICIMCIS 2025',
        'award.ieee.desc': 'Published research on AI-powered Sumobot in prestigious IEEE conference proceedings.',
        
        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.subtitle': "Let's Connect",
        'contact.description': "Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and creative collaborations.",
        'contact.email': 'Email Me',
        'contact.phone': 'Call Me',
        'contact.location': 'Location',
        'contact.social': 'Social Media',
        
        // Footer
        'footer.copyright': '© 2025 Cleopatra Hapsari Admajindra. All rights reserved.',
        'footer.madewidth': 'Made with',
        'footer.and': 'and',
        'footer.coffee': 'lots of coffee',
        
        // Gallery Page
        'gallery.title': 'Artwork Gallery',
        'gallery.subtitle': 'Digital Art & Illustrations',
        'gallery.filter.all': 'All',
        'gallery.filter.illustration': 'Illustration',
        'gallery.filter.character': 'Character Design',
        'gallery.filter.fanart': 'Fan Art',
        'gallery.filter.concept': 'Concept Art',
        'gallery.back': 'Back to Home',
        
        // Projects Page
        'webprojects.title': 'Web Projects',
        'webprojects.subtitle': 'Full-Stack Development Portfolio',
        'webprojects.filter.all': 'All',
        'webprojects.filter.frontend': 'Frontend',
        'webprojects.filter.fullstack': 'Full-Stack',
        'webprojects.filter.game': 'Game Dev',
        'webprojects.back': 'Back to Home',
        
        // Misc
        'misc.loading': 'Loading...',
        'misc.viewmore': 'View More',
        'misc.close': 'Close',
        'misc.next': 'Next',
        'misc.prev': 'Previous'
    },
    
    id: {
        // Navigation
        'nav.home': 'Beranda',
        'nav.about': 'Tentang',
        'nav.skills': 'Keahlian',
        'nav.experience': 'Perjalanan',
        'nav.projects': 'Proyek',
        'nav.awards': 'Penghargaan',
        'nav.contact': 'Kontak',
        'nav.artwork': 'Karya Seni',
        'nav.webprojects': 'Proyek Web',
        
        // Hero Section
        'hero.greeting': 'Halo, Dunia!',
        'hero.intro': 'Saya',
        'hero.name': 'Cleopatra Hapsari',
        'hero.tagline': 'Menciptakan Pengalaman Digital di Persimpangan Seni & Teknologi',
        'hero.cta.projects': 'Lihat Proyek',
        'hero.cta.contact': 'Hubungi Saya',
        'hero.scroll': 'Scroll untuk Eksplorasi',
        
        // Roles
        'role.gamedesigner': 'Desainer Game',
        'role.fullstack': 'Developer Full-Stack',
        'role.airesearcher': 'Peneliti AI',
        'role.artist': 'Seniman 2D',
        
        // About Section
        'about.title': 'Tentang Saya',
        'about.subtitle': 'Siapa Saya?',
        'about.description': 'Seorang kreator teknologi multidisiplin dari Semarang, Indonesia. Saya memadukan visi artistik dengan keahlian teknis untuk menciptakan pengalaman digital yang imersif. Saat ini menempuh Ilmu Komputer di Universitas Dian Nuswantoro dengan IPK 3.73.',
        'about.passion': 'Passion saya terletak pada pengembangan game, riset AI, dan menciptakan antarmuka pengguna yang indah yang bercerita.',
        
        // Stats
        'stats.experience': 'Tahun Pengalaman',
        'stats.projects': 'Proyek Selesai',
        'stats.awards': 'Penghargaan',
        'stats.clients': 'Klien Puas',
        
        // Skills Section
        'skills.title': 'Keahlian & Arsenal',
        'skills.subtitle': 'Teknologi yang Saya Kuasai',
        'skills.gamedev': 'Pengembangan Game',
        'skills.webdev': 'Pengembangan Web',
        'skills.aiml': 'AI & Machine Learning',
        'skills.design': 'Desain & Seni',
        
        // Experience Section
        'experience.title': 'Perjalanan & Pengalaman',
        'experience.subtitle': 'Jejak Profesional Saya',
        'experience.present': 'Sekarang',
        
        // Experience Items
        'exp.ophius.title': 'Desainer Game',
        'exp.ophius.company': 'Ophius Studio',
        'exp.ophius.date': '2024 - Sekarang',
        'exp.ophius.desc': 'Memimpin inisiatif desain game, menciptakan pengalaman gameplay imersif dan sistem naratif untuk proyek game indie.',
        
        'exp.igs.title': 'Intern Riset AI',
        'exp.igs.company': 'IGS & NTUST Taiwan',
        'exp.igs.date': '2024 - 2025',
        'exp.igs.desc': 'Melakukan riset tentang robotika bertenaga AI, khususnya sistem otonom Sumobot menggunakan computer vision dan machine learning.',
        
        'exp.gemastik.title': 'Lead Developer',
        'exp.gemastik.company': 'Tim Feiren - GEMASTIK 2025',
        'exp.gemastik.date': '2025',
        'exp.gemastik.desc': 'Mengembangkan solusi inovatif untuk kompetisi teknologi nasional, fokus pada pengembangan software mutakhir.',
        
        'exp.freelance.title': 'Seniman 2D Freelance',
        'exp.freelance.company': 'Wiraswasta',
        'exp.freelance.date': '2018 - Sekarang',
        'exp.freelance.desc': 'Membuat ilustrasi digital, desain karakter, dan aset visual untuk berbagai klien di seluruh dunia.',
        
        'exp.fullstack.title': 'Developer Full-Stack',
        'exp.fullstack.company': 'Berbagai Proyek',
        'exp.fullstack.date': '2023 - Sekarang',
        'exp.fullstack.desc': 'Membangun aplikasi web modern menggunakan React, Next.js, dan Node.js untuk startup dan bisnis established.',
        
        // Projects Section
        'projects.title': 'Proyek Unggulan',
        'projects.subtitle': 'Karya Terbaru',
        'projects.viewall': 'Lihat Semua Proyek',
        'projects.viewlive': 'Lihat Live',
        'projects.viewcode': 'Lihat Kode',
        
        // Project Items
        'project.inkura.title': 'Inkura',
        'project.inkura.desc': 'Platform manga digital komprehensif dibangun dengan teknologi web modern, menampilkan fitur membaca, menerbitkan, dan komunitas.',
        'project.inkura.tags': 'Next.js, React, Prisma, TypeScript',
        
        'project.ophius.title': 'Ophius Studio',
        'project.ophius.desc': 'Website resmi untuk studio game indie yang menampilkan proyek, tim, dan blog pengembangan dengan visual memukau.',
        'project.ophius.tags': 'React, Three.js, GSAP, Vercel',
        
        'project.sumobot.title': 'Sumobot AI',
        'project.sumobot.desc': 'Sistem sumobot otonom menggunakan computer vision dan machine learning, dipublikasikan di IEEE ICIMCIS 2025.',
        'project.sumobot.tags': 'Python, OpenCV, TensorFlow, Arduino',
        
        'project.siakad.title': 'SIAKAD UDINUS',
        'project.siakad.desc': 'Sistem informasi akademik untuk Universitas Dian Nuswantoro, menangani data mahasiswa, nilai, dan penjadwalan.',
        'project.siakad.tags': 'PHP, Laravel, MySQL, Bootstrap',
        
        // Awards Section
        'awards.title': 'Penghargaan & Pengakuan',
        'awards.subtitle': 'Achievement Unlocked',
        
        // Award Items
        'award.manga.title': 'Juara 1 - Kompetisi Manga',
        'award.manga.event': 'DINUSFEST 2021',
        'award.manga.desc': 'Meraih juara pertama dalam kompetisi menggambar manga, menunjukkan keterampilan artistik dan kemampuan bercerita.',
        
        'award.acgn.title': 'Juara 2 - Penulisan ACGN',
        'award.acgn.event': 'Kompetisi ACGN 2022',
        'award.acgn.desc': 'Diakui atas keunggulan penulisan kreatif dalam kategori anime, komik, game, dan novel.',
        
        'award.ieee.title': 'Paper Riset Terpublikasi',
        'award.ieee.event': 'IEEE ICIMCIS 2025',
        'award.ieee.desc': 'Mempublikasikan riset tentang Sumobot bertenaga AI di prosiding konferensi IEEE yang prestisius.',
        
        // Contact Section
        'contact.title': 'Hubungi Saya',
        'contact.subtitle': 'Mari Terhubung',
        'contact.description': 'Punya proyek dalam pikiran atau hanya ingin menyapa? Saya selalu terbuka untuk mendiskusikan peluang baru dan kolaborasi kreatif.',
        'contact.email': 'Email Saya',
        'contact.phone': 'Telepon Saya',
        'contact.location': 'Lokasi',
        'contact.social': 'Media Sosial',
        
        // Footer
        'footer.copyright': '© 2025 Cleopatra Hapsari Admajindra. Hak cipta dilindungi.',
        'footer.madewidth': 'Dibuat dengan',
        'footer.and': 'dan',
        'footer.coffee': 'banyak kopi',
        
        // Gallery Page
        'gallery.title': 'Galeri Karya Seni',
        'gallery.subtitle': 'Seni Digital & Ilustrasi',
        'gallery.filter.all': 'Semua',
        'gallery.filter.illustration': 'Ilustrasi',
        'gallery.filter.character': 'Desain Karakter',
        'gallery.filter.fanart': 'Fan Art',
        'gallery.filter.concept': 'Concept Art',
        'gallery.back': 'Kembali ke Beranda',
        
        // Projects Page
        'webprojects.title': 'Proyek Web',
        'webprojects.subtitle': 'Portfolio Pengembangan Full-Stack',
        'webprojects.filter.all': 'Semua',
        'webprojects.filter.frontend': 'Frontend',
        'webprojects.filter.fullstack': 'Full-Stack',
        'webprojects.filter.game': 'Game Dev',
        'webprojects.back': 'Kembali ke Beranda',
        
        // Misc
        'misc.loading': 'Memuat...',
        'misc.viewmore': 'Lihat Lebih',
        'misc.close': 'Tutup',
        'misc.next': 'Selanjutnya',
        'misc.prev': 'Sebelumnya'
    }
};

class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.init();
    }

    init() {
        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Language switcher
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.setLanguage(lang);
                
                // Update active state
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
            
            // Set initial active state
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('active');
            }
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
        
        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);
            
            if (translation) {
                // Check if it's an input placeholder
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Translate data-i18n-title for tooltips
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = this.translate(key);
            if (translation) {
                element.title = translation;
            }
        });

        // Translate data-i18n-aria for accessibility
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            const translation = this.translate(key);
            if (translation) {
                element.setAttribute('aria-label', translation);
            }
        });

        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    translate(key) {
        return translations[this.currentLang]?.[key] || translations['en'][key] || key;
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    getTranslations(lang) {
        return translations[lang] || translations['en'];
    }
}

// Initialize I18n
const i18n = new I18n();

// Export for global usage
window.i18n = i18n;
window.t = (key) => i18n.translate(key);

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { I18n, translations };
}
