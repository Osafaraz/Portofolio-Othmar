# Portofolio M. Othmar Safaraz (2026)

Website portofolio interaktif single-page untuk **M. Othmar Safaraz**, dibangun dengan implementasi **pixel-faithful 1:1** berdasarkan desain Figma.

---

## 🚀 Cara Menjalankan

### 1. Prasyarat
- Node.js (v18 atau lebih baru)
- npm / pnpm / yarn

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser di `http://localhost:5173/`.

### 4. Build untuk Produksi
```bash
npm run build
```

### 5. Menjalankan Preview Hasil Build
```bash
npm run preview
```
Buka browser di `http://localhost:4173/`.

---

## 📁 Struktur Folder

```text
portofolio-othmar/
├── docs/
│   ├── design-spec.md         # Dokumentasi spesifikasi token, font, warna & koordinat
│   └── asset-manifest.md      # Pemetaan 76 asset lokal ↔ layer Figma ↔ section
├── public/
│   └── assets/
│       ├── audio/             # File audio musik latar (bgm.mp3)
│       ├── icons/             # Ikon kontak, software (Photoshop, Illustrator, Blender, dll.)
│       ├── images/            # Foto polaroid, render 3D, poster, artwork
│       ├── mockups/           # Mockup iPhone X, kaos, flyer, sign board, ARVANA
│       └── stickers/          # Stiker 2026, Always With New Ideas, smiley merah, emoji 3D
├── src/
│   ├── components/
│   │   ├── IntroScreen.tsx    # Layar intro "Enter Portfolio" pembuka audio & animasi
│   │   ├── Navbar.tsx         # Fixed glass navbar dengan active indicator & BGM mute toggle
│   │   ├── SectionTransition.tsx # Animasi sapuan gradien saat navigasi section
│   │   ├── HeroSection.tsx    # Section Hero (PORT FOLIO + 3 stiker interaktif)
│   │   ├── AboutSection.tsx   # Section About (polaroid, clip, name tag, 05' kid, software)
│   │   ├── PcrCupSection.tsx  # Section PCR Cup Basket 2025 (mockup komposit + 5 poster)
│   │   ├── JtiExpoSection.tsx # Section JTI EXPO III 2025 (signboard + 3D extruded logo)
│   │   ├── Competition4CSection.tsx # Section 4C (2 mockup iPhone ARVANA + 5 app screens)
│   │   ├── PersonalWorksSection.tsx # Section Personal Works (timeline putus-putus + 4 kategori)
│   │   └── ContactSection.tsx # Section Closing / Thanks (Let's Work Together)
│   ├── config/
│   │   └── audio.ts           # Konfigurasi BGM (path file, volume default, durasi fade)
│   ├── context/
│   │   └── AudioContext.tsx   # Audio provider, auto fade-in, tab visibility handler, localStorage
│   ├── App.tsx                # Integrasi single-page utama + IntersectionObserver
│   ├── index.css              # Setup Tailwind CSS v4, custom grid pattern & token variabel
│   └── main.tsx               # Root entry
├── index.html                 # Google Fonts (Montserrat, Allura, Caveat, Rozha One) & SEO
├── package.json
└── vite.config.ts
```

---

## 🎵 Cara Mengganti File BGM (Musik Latar)

1. Letakkan file audio MP3 Anda di folder:
   ```text
   public/assets/audio/bgm.mp3
   ```
2. (Opsional) Sesuaikan volume default dan durasi transisi audio di file:
   [`src/config/audio.ts`](file:///d:/portofolio-othmar/src/config/audio.ts)
   ```typescript
   export const audioConfig = {
     bgmPath: '/assets/audio/bgm.mp3',
     defaultVolume: 0.35,   // Nilai antara 0.0 sampai 1.0 (default 35%)
     fadeInDuration: 1.5,   // Durasi fade-in saat pertama kali masuk (detik)
     fadeOutDuration: 0.8,  // Durasi fade-out saat tombol mute ditekan (detik)
     storageKey: 'othmar_portfolio_bgm_muted',
   };
   ```
3. **Catatan Ketahanan Audio**: Jika file audio belum diletakkan di folder tersebut, website tetap berjalan normal tanpa error berkat penanganan error audio otomatis.

---

## 🎨 Fitur Desain & Animasi

- **Layar Intro Interaktif**: Tombol *"Enter Portfolio"* mengatasi batasan browser autoplay audio, mengaktifkan audio dengan *fade-in* 1.5 detik, dan memicu animasi masuk stiker serta huruf bertingkat (*stagger*).
- **Navbar Glassmorphism**: Tetap berada di atas layar (*fixed*), menampilkan status aktif dinamis via `IntersectionObserver`, dan dilengkapi tombol *toggle* suara.
- **Transisi Sapuan Bertema**: Menavigasi antar-bagian melalui navbar memicu animasi sapuan layar gradien dan pola grid (≤ 1 detik).
- **Responsif**: Dioptimalkan untuk desktop 1440px sesuai Figma, dan otomatis beradaptasi proporsional di tablet dan ponsel.
