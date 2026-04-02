/* =====================================================
   CLEOPATRA PORTFOLIO - GALLERY JAVASCRIPT
   Filter & Lightbox functionality
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initGalleryFilter();
    initLightbox();
    initGalleryAnimations();
});

/* =====================================================
   GALLERY FILTER
   ===================================================== */
function initGalleryFilter() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const artworkItems = document.querySelectorAll('.artwork-item');
    
    if (filterTabs.length === 0) return;
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const filter = tab.getAttribute('data-filter');
            
            // Filter items
            artworkItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/* =====================================================
   LIGHTBOX
   ===================================================== */
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxTitle = document.querySelector('.lightbox-title');
    const lightboxDesc = document.querySelector('.lightbox-desc');
    const lightboxClose = document.querySelector('.lightbox-close');
    const zoomButtons = document.querySelectorAll('.artwork-zoom');
    
    if (!lightbox) return;
    
    // Open lightbox
    zoomButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const artworkItem = btn.closest('.artwork-item');
            const img = artworkItem.querySelector('img');
            const title = artworkItem.querySelector('.artwork-info h3').textContent;
            const desc = artworkItem.querySelector('.artwork-info p').textContent;
            
            lightboxImage.src = img.src;
            lightboxImage.alt = title;
            lightboxTitle.textContent = title;
            lightboxDesc.textContent = desc;
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/* =====================================================
   GALLERY ANIMATIONS
   ===================================================== */
function initGalleryAnimations() {
    const artworkItems = document.querySelectorAll('.artwork-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    artworkItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}
