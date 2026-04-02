# 🎮 Portfolio Cleopatra Hapsari Admajindra

Website portfolio profesional dengan tema **Cyberpunk Gaming** yang futuristik dan eye-catching.

## ✨ Fitur

- 🌐 **Bilingual** - Support Bahasa Indonesia dan English
- 🎨 **Cyberpunk Theme** - Neon colors, glitch effects, futuristic UI
- 📱 **Fully Responsive** - Optimal di semua device
- ⚡ **Smooth Animations** - Parallax, scroll animations, cursor effects
- 🖼️ **Lightbox Gallery** - Preview artwork dengan lightbox
- 🔍 **Filter System** - Filter portfolio berdasarkan kategori
- 🎯 **Custom Cursor** - Cursor interaktif dengan trail effect

## 📁 Struktur Folder

```
portfolio/
├── index.html          # Halaman utama
├── css/
│   ├── style.css       # Stylesheet utama
│   └── pages.css       # Stylesheet untuk halaman artwork & projects
├── js/
│   ├── main.js         # JavaScript utama
│   ├── i18n.js         # Sistem multi-bahasa
│   └── gallery.js      # Gallery/Lightbox functionality
├── pages/
│   ├── artwork.html    # Halaman galeri artwork
│   └── projects.html   # Halaman proyek web
└── assets/             # Folder untuk gambar (tambahkan sendiri)
```

## 🚀 Cara Pakai

1. **Ganti Foto Profil**
   - Cari `images.unsplash.com` di `index.html`
   - Ganti URL dengan link foto kamu atau path lokal

2. **Ganti Foto Artwork**
   - Buka `pages/artwork.html`
   - Ganti semua URL gambar placeholder dengan artwork asli kamu
   - Upload ke folder `assets/` untuk gambar lokal

3. **Update Link Sosial Media**
   - Email: Cari `patrahapsari@gmail.com`
   - LinkedIn: Cari `linkedin.com/in/cleopatraha`
   - Instagram: Cari `@canvas.noe`
   - GitHub: Cari `github.com/CHA-NYANN`

4. **Deploy Website**
   - Upload semua file ke hosting (Vercel, Netlify, GitHub Pages)
   - Atau jalankan lokal dengan Live Server

## 🎨 Customization

### Warna Tema
Edit di `css/style.css`:
```css
:root {
    --accent-cyan: #00ffcc;
    --accent-magenta: #ff00aa;
    --accent-purple: #7b2dff;
    --accent-yellow: #ffcc00;
}
```

### Bahasa Default
Edit di `index.html` dan halaman lainnya:
```html
<html lang="id" data-lang="id">  <!-- Ganti ke "en" untuk English -->
```

## 📝 Tips

- Pastikan gambar artwork minimal **800x600px** untuk kualitas optimal
- Gunakan format **WebP** atau **JPEG** untuk performa lebih baik
- Test di berbagai browser sebelum launch

## 📄 License

Feel free to modify and use for personal/commercial use.

---

Made with 💜 by Claude AI for Cleopatra Hapsari
