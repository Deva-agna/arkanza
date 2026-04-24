# 🍼 Undangan Aqiqah & Tasmiyah - Muhammad Arkanza Devandra

Undangan digital untuk acara Aqiqah dan Tasmiyah putra tercinta Muhammad Arkanza Devandra.

![Preview](https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800)

## ✨ Fitur

- 📱 **Responsive Design** - Tampilan optimal di semua perangkat
- 🎵 **Background Music** - Musik latar dengan kontrol play/pause
- 👤 **Personalized Greeting** - Nama tamu bisa dikustomisasi via URL
- ⏰ **Countdown Timer** - Hitungan mundur menuju hari H
- 📍 **Google Maps Integration** - Navigasi lokasi mudah
- 🖼️ **Photo Gallery** - Galeri foto dengan lazy loading
- ✨ **Smooth Animations** - Animasi elegan dengan AOS
- 📲 **Social Sharing** - Tombol share ke WhatsApp

## 🚀 Live Demo

Kunjungi: `https://[username].github.io/arkanza`

## 📋 Cara Menggunakan

### 1. Clone Repository

```bash
git clone https://github.com/[username]/arkanza.git
cd arkanza
```

### 2. Personalisasi Undangan

Edit file `index.html` untuk menyesuaikan:
- Nama bayi
- Arti nama
- Tanggal acara
- Lokasi
- Foto bayi
- Nama orang tua

### 3. Ganti Foto

Ganti URL foto di `index.html` dengan foto Arkanza:

```html
<img src="assets/images/arkanza-1.jpg" alt="Arkanza">
```

### 4. Ganti Musik

Ganti URL musik di bagian audio player:

```html
<audio id="background-music" loop>
    <source src="assets/music/background.mp3" type="audio/mpeg">
</audio>
```

## 🌐 Cara Share dengan Nama Tamu

Tambahkan parameter `to` di URL:

```
https://[username].github.io/arkanza?to=Bapak+John+Doe
```

Atau dengan spasi:

```
https://[username].github.io/arkanza?to=Nama%20Tamu
```

## 🎨 Kustomisasi Tema

Tema warna menggunakan Tailwind CSS dengan warna custom:

- **Sage Green** - Warna utama (#7d8a60)
- **Warm Beige** - Warna sekunder (#a89878)
- **Soft Cream** - Background (#faf9f7)

Edit konfigurasi di bagian `<script>` Tailwind config dalam `index.html`.

## 📦 Deployment ke GitHub Pages

### Otomatis (GitHub Actions)

1. Push ke branch `main` atau `master`
2. GitHub Actions akan otomatis deploy
3. Aktifkan GitHub Pages di Settings > Pages
4. Pilih source: GitHub Actions

### Manual

1. Buka repository di GitHub
2. Settings > Pages
3. Source: Deploy from a branch
4. Branch: main / (root)
5. Save

## 📁 Struktur Folder

```
arkanza/
├── index.html              # File utama
├── assets/
│   ├── css/               # Stylesheet (jika ada)
│   ├── js/
│   │   └── main.js        # JavaScript utama
│   ├── images/            # Folder foto
│   └── music/             # Folder musik
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions
└── README.md
```

## 🛠️ Tech Stack

- **HTML5** - Markup
- **Tailwind CSS** - Styling
- **JavaScript** - Interaktivitas
- **AOS (Animate On Scroll)** - Animasi
- **Phosphor Icons** - Icon library
- **Google Fonts** - Typography

## 📝 TODO (Kustomisasi Wajib)

- [ ] Ganti foto bayi dengan foto Arkanza yang asli
- [ ] Ganti musik background
- [ ] Update nama orang tua di footer
- [ ] Update alamat lengkap di section lokasi
- [ ] Update tanggal lahir bayi di profil
- [ ] Ganti URL Open Graph image
- [ ] Update URL GitHub Pages di meta tags

## 📄 License

Project ini dibuat untuk keperluan pribadi keluarga Muhammad Arkanza Devandra.

---

Dibuat dengan ❤️ untuk Arkanza