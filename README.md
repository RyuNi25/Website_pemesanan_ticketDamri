# 🚌 DAMRI UNSRI - Aplikasi Pemesanan Tiket Bus

Aplikasi web untuk pemesanan tiket bus DAMRI khusus mahasiswa Universitas Sriwijaya (UNSRI).

![DAMRI UNSRI](https://images.unsplash.com/photo-1632834380561-d1e05839a33a?w=800&q=80)

## 📋 Fitur Utama

✅ **Pencarian Rute** - Cari jadwal bus berdasarkan rute dan tanggal  
✅ **Pilih Jadwal** - Lihat dan pilih jadwal bus yang tersedia  
✅ **Pemilihan Kursi Interaktif** - Pilih kursi dengan tampilan visual 3D bus  
✅ **Form Data Mahasiswa** - Input data dengan validasi NIM dan fakultas UNSRI  
✅ **Ringkasan Booking** - Review pemesanan sebelum pembayaran  
✅ **Konfirmasi & E-Tiket** - Dapatkan tiket elektronik setelah booking  
✅ **Desain Responsif** - Nyaman digunakan di mobile dan desktop  

## 🎨 Design System

- **Warna Utama**: Biru DAMRI (#1E40AF) & UNSRI  
- **Framework**: React + TypeScript + Vite  
- **Styling**: Tailwind CSS v4  
- **Components**: Shadcn/ui  
- **Icons**: Lucide React  

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:5173
```

### Build untuk Production

```bash
# Build aplikasi
npm run build

# Preview build
npm run preview
```

## 📦 Deployment

Aplikasi ini siap untuk di-deploy ke berbagai platform. Lihat [DEPLOYMENT.md](./DEPLOYMENT.md) untuk panduan lengkap.

### Deploy Cepat ke Vercel

```bash
npm install -g vercel
vercel
```

### Deploy ke Netlify

Drag & drop folder `dist` (setelah build) ke [Netlify](https://app.netlify.com/drop)

## 📁 Struktur Proyek

```
damri-unsri/
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── index.html             # HTML template
├── components/            # React components
│   ├── Header.tsx
│   ├── SearchForm.tsx
│   ├── BusSchedule.tsx
│   ├── SeatSelection.tsx
│   ├── PassengerForm.tsx
│   ├── BookingSummary.tsx
│   ├── BookingConfirmation.tsx
│   └── ui/               # Shadcn UI components
├── styles/
│   └── globals.css       # Global styles & Tailwind config
├── vercel.json           # Vercel configuration
├── netlify.toml          # Netlify configuration
└── package.json
```

## 🔧 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS v4** - Styling
- **Shadcn/ui** - UI components
- **Lucide React** - Icons

## 💳 Payment Integration (Coming Soon)

Sistem pembayaran akan terintegrasi dengan:
- QRIS
- Virtual Account (BCA, Mandiri, BNI)
- GoPay / OVO
- Transfer Bank

## 🎓 Data Mahasiswa

Aplikasi ini mengumpulkan data:
- Nama Lengkap
- NIM (Nomor Induk Mahasiswa)
- Fakultas
- Email Mahasiswa
- Nomor Telepon

**Catatan**: Data mahasiswa hanya digunakan untuk keperluan booking dan tidak disalahgunakan.

## 📱 Responsive Design

Aplikasi ini fully responsive dan dioptimasi untuk:
- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

## 🌟 Upcoming Features

- [ ] Integrasi pembayaran real-time
- [ ] Notifikasi email otomatis
- [ ] Riwayat pemesanan
- [ ] QR Code untuk e-ticket
- [ ] Push notifications
- [ ] Multi-language support
- [ ] Dark mode
- [ ] PWA (Progressive Web App)

## 📞 Support & Contact

**DAMRI UNSRI Customer Service**  
📧 Email: cs.unsri@damri.co.id  
📱 Phone: (0711) 580-123  
🌐 Website: [Link website resmi]

## 📄 License

© 2025 DAMRI UNSRI. All rights reserved.

---

**Dibuat dengan ❤️ untuk Mahasiswa UNSRI**
