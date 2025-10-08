# 🚀 Panduan Deployment - Aplikasi DAMRI UNSRI

Aplikasi pemesanan tiket bus DAMRI UNSRI ini sudah siap untuk di-deploy! Berikut adalah panduan lengkap untuk berbagai platform deployment.

---

## ⚡ METODE 1: VERCEL (PALING MUDAH & DIREKOMENDASIKAN)

### Langkah-langkah:

1. **Persiapkan Code**
   - Download semua file proyek ini
   - Pastikan semua file ada (App.tsx, components, styles, dll)

2. **Buat Akun Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Sign up menggunakan GitHub, GitLab, atau Bitbucket
   - Gratis untuk personal projects!

3. **Deploy dengan 2 Cara:**

   **CARA A: Deploy dari GitHub (Direkomendasikan)**
   - Push code Anda ke GitHub repository
   - Di Vercel dashboard, klik "Add New Project"
   - Import repository GitHub Anda
   - Vercel akan auto-detect settings
   - Klik "Deploy"
   - ✅ Selesai! Website Anda live dalam 2-3 menit

   **CARA B: Deploy Manual**
   - Install Vercel CLI: `npm install -g vercel`
   - Di folder proyek, jalankan: `vercel`
   - Login dengan akun Vercel
   - Follow instruksi di terminal
   - ✅ Website deployed!

4. **Custom Domain (Opsional)**
   - Di Vercel dashboard → Settings → Domains
   - Tambahkan domain custom Anda (contoh: damri-unsri.com)
   - Update DNS sesuai instruksi Vercel

### ✅ Keuntungan Vercel:
- Gratis untuk unlimited projects
- Auto-deploy setiap git push
- HTTPS otomatis
- Performance excellent (CDN global)
- Perfect untuk React/Vite

---

## 🌐 METODE 2: NETLIFY

### Langkah-langkah:

1. **Buat Akun**
   - Kunjungi [netlify.com](https://netlify.com)
   - Sign up dengan GitHub/GitLab/Bitbucket
   - Gratis!

2. **Deploy dengan 3 Cara:**

   **CARA A: Drag & Drop (Paling Mudah)**
   - Build proyek dulu: `npm run build`
   - Drag folder `dist` ke Netlify dashboard
   - ✅ Instant deploy!

   **CARA B: Git Integration**
   - Push code ke GitHub
   - Di Netlify: "New site from Git"
   - Connect repository
   - Build settings sudah auto-detect dari `netlify.toml`
   - Deploy!

   **CARA C: Netlify CLI**
   - Install CLI: `npm install -g netlify-cli`
   - Run: `netlify deploy`
   - Follow instruksi

3. **Custom Domain**
   - Netlify dashboard → Domain settings
   - Add custom domain
   - Update DNS

### ✅ Keuntungan Netlify:
- Drag & drop super mudah
- Forms & Functions built-in
- Split testing
- Deploy previews

---

## 📦 METODE 3: GITHUB PAGES

### Langkah-langkah:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Edit package.json** (tambahkan):
   ```json
   {
     "homepage": "https://username.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Aktifkan GitHub Pages**
   - Repository Settings → Pages
   - Source: `gh-pages` branch
   - ✅ Live di `username.github.io/repository-name`

### ✅ Keuntungan GitHub Pages:
- 100% Gratis
- Terintegrasi dengan GitHub
- Cocok untuk portfolio

---

## 🇮🇩 METODE 4: HOSTING INDONESIA (Untuk Production)

### Platform yang Direkomendasikan:

**1. Hostinger Indonesia**
- Harga: ~Rp 20.000/bulan
- Domain .id included
- cPanel mudah
- Server Indonesia (loading cepat)

**2. Niagahoster**
- Support 24/7 Bahasa Indonesia
- Harga murah
- Tutorial lengkap

**3. IDCloudHost**
- Data center Indonesia
- Loading super cepat untuk user lokal

### Langkah Deploy:
1. Build aplikasi: `npm run build`
2. Zip folder `dist`
3. Upload ke cPanel → File Manager → public_html
4. Extract di server
5. ✅ Website live!

---

## 🎯 REKOMENDASI UNTUK DAMRI UNSRI

Berdasarkan use case Anda, saya rekomendasikan:

### 🏆 **TAHAP 1: Development & Testing**
**Gunakan: VERCEL**
- Gratis unlimited
- Deploy otomatis
- Perfect untuk testing dengan mahasiswa
- URL: damri-unsri.vercel.app

### 🏆 **TAHAP 2: Production (Untuk UNSRI Resmi)**
**Gunakan: Hosting Indonesia**
- Domain: damri-unsri.id atau damri.unsri.ac.id
- Loading lebih cepat untuk mahasiswa di Indonesia
- Support lokal
- Lebih profesional

---

## 📝 CHECKLIST SEBELUM DEPLOY

- [ ] Semua komponen berfungsi dengan baik
- [ ] Tidak ada console errors
- [ ] Responsif di mobile & desktop
- [ ] Images load dengan benar
- [ ] Form validation berfungsi
- [ ] Test di berbagai browser
- [ ] Update contact info (email, phone) jika perlu

---

## 🔧 BUILD & TEST LOKAL

Sebelum deploy, pastikan aplikasi berjalan:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

---

## 🆘 TROUBLESHOOTING

### Error: "Module not found"
- Jalankan: `npm install`

### Error: "Build failed"
- Cek console errors
- Pastikan semua imports benar
- Cek file paths (case-sensitive di Linux)

### Website blank setelah deploy
- Cek browser console
- Pastikan routing config benar (vercel.json / netlify.toml)

### Images tidak muncul
- Pastikan path images benar
- Cek ImageWithFallback component

---

## 📞 SUPPORT

Jika ada pertanyaan atau butuh bantuan deployment, silakan hubungi tim development.

**Selamat Deploy! 🎉**

---

## 📌 QUICK START - VERCEL (Tercepat)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Masuk ke folder proyek
cd damri-unsri

# 3. Deploy!
vercel

# 4. Follow instruksi, jawab:
# - Set up and deploy? Y
# - Which scope? Your account
# - Link to existing project? N
# - Project name? damri-unsri
# - Directory? ./
# - Override settings? N

# ✅ DONE! URL akan muncul di terminal
```

Website Anda akan live dalam hitungan detik! 🚀
