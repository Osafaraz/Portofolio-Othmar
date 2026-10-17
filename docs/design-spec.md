# Design Specification — Portofolio M. Othmar Safaraz 2026

Dokumen ini mendokumentasikan spesifikasi desain hasil ekstraksi presisi melalui **Figma Dev Mode MCP** dari file:
`https://www.figma.com/design/MuHZz5H80p8yMRNV4lLDo6/Portofolio-Othmar-2026?node-id=5-2`

---

## 1. Grid & Dimensi Canvas
- **Canvas Width**: 1440px (Basis desktop pixel-faithful 1:1)
- **Canvas Height**: 8210px
- **Background Base**: `#f4f7f4` (Creamy soft off-white)
- **Background Grid**: Grid berulang berjarak vertikal ~78px dan horizontal ~54.3px dengan garis tipis rgba(30, 30, 30, 0.05).
- **Blob Gradien Ambient**:
  - Hero Left: Radial blur cyan/blue (`#3b82f6` - `#1d4ed8`)
  - Hero Right: Radial blur warm peach/orange (`#f97316` - `#f59e0b`)
  - Hero Center-Bottom: Ambient yellow blur
  - Works & Sections: Blob gradien selaras di sisi-sisi section yang mengalir alami ke bawah.

---

## 2. Struktur Section & Koordinat (Figma 1440px)

| ID | Section Name | Y Position | Height | Elemen Kunci |
|---|---|---|---|---|
| `home` | Hero Cover | 0px | ~730px | Welcome To Othmar's, PORT FOLIO (250px/240px), Sticker 2026 (rotasi 6.69°), Sticker Always With New Ideas (rotasi -9.88°), Sticker Smiley Merah (rotasi -15°) |
| `about` | Profile & Experience | 730px | ~1340px | Teks perkenalan, Experience (6 items dengan red dot), Software (6 icon rounded 16px), Kartu Polaroid foto Othmar + bulldog paper clip + handwritten "29 mei 2005" + Name tag "Othmar" + Sticker hijau "05' Kid" + Smile sticker, Education, Contact (Email, Phone, TikTok) + Sticker "Contact Me!" |
| `pcr-cup` | PCR CUP Basket 2025 | 2070px | ~1150px | Judul 112px/64px, @basketballpcr, Deskripsi terjustifikasi, Mockup iPhone X (layar story & logo) + Flyer basket ber-pin merah + Kaos hijau "WE ARE", Floating 3D emoji love-eyes, Baris 5 kartu poster pertandingan (234x292px) |
| `jti-expo` | JTI EXPO III 2025 | 3220px | ~950px | Judul 112px/64px, @jtievents_, Deskripsi terjustifikasi, Mockup Sign Board besar + Logo 3D JTI Expo bertingkat (shadow triple layer) + Smiley merah, Floating 3D emoji |
| `4c` | 4C National Competition | 4170px | ~1400px | Judul 96px/64px, Deskripsi terjustifikasi, Mockup 2 HP ARVANA (iPhone Space Silver miring -11° dan +8.7°), Floating 3D emoji, Baris 5 layar high-fidelity UI ARVANA (228x494px, radius 10px) |
| `works` | Personal Works | 5575px | ~1780px | Judul "Pers●nal W●rks" (dua huruf O diganti stiker bulat kuning dan merah smiley), Garis timeline vertikal putus-putus (x: 720px), 4 kategori selang-seling (Street Photography, Wedding Photography, Sketching & Drawing, 3D Animation Project) dengan dot hitam dan masing-masing 2 foto (337x190px), Floating 3D laughing emoji |
| `contact` | Closing / Thanks | 7357px | 853px | "Thanks!" (Italic 48px), Garis vertikal 140px, "Let's Work Together" (84px bold), "Don't hesitate to reach me" (48px light), Telepon + Email dengan ikon lingkaran merah, Ambient blobs |

---

## 3. Tipografi

1. **Montserrat** (Google Fonts):
   - Weights: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold), 800 (ExtraBold), 900 (Black), 400 Italic.
   - Digunakan untuk: Judul Hero ("PORT FOLIO"), Subjudul Section ("PCR CUP", "JTI EXPO", "4C National Competition", "Personal Works", "Let's Work Together"), Teks tombol, Heading nama "M.OTHMAR SAFARAZ".
2. **Helvetica / Sans-Serif**:
   - Weights: Regular (Light 300), Bold (700).
   - Digunakan untuk: Paragraf deskripsi bio, item Experience, Education, label Software.
3. **Allura** (Google Fonts):
   - Style: Cursive / Handwritten.
   - Digunakan untuk: Tanggal polaroid "29 mei 2005" (36px).
4. **Caveat / Handwritten**:
   - Style: Casual handwritten marker.
   - Digunakan untuk: Nama "Othmar" di name tag (28px).
5. **Rozha One / Display Serif**:
   - Digunakan untuk: Angka "05'" pada green sticker.

---

## 4. Design Tokens & CSS Variables

```css
:root {
  /* Colors */
  --color-bg: #f4f7f4;
  --color-bg-white: #ffffff;
  --color-text-main: #1e1e1e;
  --color-text-black: #000000;
  --color-text-muted: #a0a0a0;
  --color-accent-red: #e4281f;
  --color-accent-orange: #f59e0b;
  --color-accent-peach: #fb923c;
  --color-accent-yellow: #f7b928;
  --color-accent-green: #1b623a;
  --color-accent-blue: #092172;
  --color-accent-cream: #fceec9;

  /* Typography */
  --font-montserrat: 'Montserrat', sans-serif;
  --font-body: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-cursive: 'Allura', cursive;
  --font-hand: 'Caveat', cursive;
  --font-serif-display: 'Rozha One', serif;

  /* Border Radii */
  --radius-sm: 5px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-pill: 9999px;

  /* Shadows */
  --shadow-card: 0px 8px 21.6px rgba(0, 0, 0, 0.25);
  --shadow-screen: 0px 7px 13.3px rgba(0, 0, 0, 0.25);
  --shadow-polaroid: 1px 6px 20.2px rgba(0, 0, 0, 0.25);
  --shadow-pin: 7px 5px 9.8px rgba(0, 0, 0, 0.19);
  --shadow-drop-hero: drop-shadow(0px 0px 15.35px rgba(0, 0, 0, 0.25));
}
```

---

## 5. Daftar Catatan Typo & Tekstual Asli dari Figma (Rule #4)

Sesuai aturan ketat #4, teks diimplementasikan **persis seperti di Figma** tanpa mengubah kesalahan ketik asli:
1. `Intrenship` (seharusnya *Internship*) — Experience item 1
2. `PT Digital Indonesia Hebat As Software Enginere` (seharusnya *Engineer*) — Experience item 1
3. `Helo` (nama layer di Figma)
4. `29 mei 2005` (huruf 'm' kecil pada bulan)
5. `JTI EXPO 3 2025` (di paragraf deskripsi tertulis angka latin '3', sedangkan judul memakai romawi 'III')
6. `Pers●nal W●rks` (dua huruf 'O' diganti stiker bulat grafis)
