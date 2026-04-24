# Product Requirements Document (PRD): Undangan Online Aqiqah & Tasmiyah

## 1. Ringkasan Proyek
* **Nama Produk:** Aqiqah Digital Invite (GitHub Version)
* **Platform:** Web (Responsive Mobile-First)
* **Hosting:** GitHub Pages (Static Hosting)
* **Tujuan:** Aplikasi undangan satu halaman (Single Page) untuk acara Aqiqah dan Tasmiyah yang ringan, cepat, dan mudah dibagikan via WhatsApp.

---

## 2. Fitur Utama (Core Features)

### A. Fitur Halaman Undangan
* **Personalized Greeting:** Menampilkan nama tamu yang diundang melalui parameter URL (Contoh: `?to=Nama+Tamu`).
* **Hero Section:** Foto bayi, nama panggilan, dan tombol "Buka Undangan".
* **Informasi Bayi & Tasmiyah:** Bagian yang menampilkan nama lengkap bayi beserta artinya (filosofi pemberian nama).
* **Detail Acara:** Tanggal, waktu, dan lokasi yang terhubung langsung ke Google Maps.
* **Countdown Timer:** Penghitung waktu mundur menuju hari H.
* **Galeri Foto:** Galeri foto bayi yang dioptimasi untuk web (Lazy Loading).

### B. Fitur Dinamis (Solusi Hosting Statis)
Karena GitHub Pages bersifat statis, fitur berikut akan menggunakan pihak ketiga:
* **Autoplay Music:** Audio background (MP3) dengan kontrol Play/Pause manual untuk mematuhi kebijakan browser.

---

## 3. Struktur Konten & Navigasi

| Section | Elemen | Deskripsi |
| :--- | :--- | :--- |
| **Overlay Cover** | Animasi Nama Tamu & Tombol Buka | Menutupi layar saat pertama kali dibuka. |
| **Ayat Suci** | Kutipan QS. An-Nahl: 78 atau Doa | Teks pembuka acara Aqiqah. |
| **Profil Bayi** | Foto & Nama Lengkap | Fokus pada visual bayi yang bersih dan jernih. |
| **Event Schedule** | Card Detail Acara | Lokasi (Embed Maps) dan Waktu (Save to Calendar). |
| **Footer** | Kredit Keluarga | Ucapan terima kasih dari orang tua. |

---

## 4. Persyaratan Teknis (Tech Stack)

* **Framework:** Vue.js (Vite) untuk manajemen state yang efisien.
* **Styling:** Tailwind CSS (untuk desain responsif yang cepat).
* **Assets:** Gambar harus dikompresi (format WebP) untuk performa maksimal di hosting statis.
* **Meta Tags:** Optimasi Open Graph (OG Tags) agar muncul gambar preview saat link disebar di WhatsApp.

---

## 5. Alur Pengguna (User Flow)
1.  **Akses URL:** Tamu mengklik link dari WhatsApp.
2.  **Halaman Sampul:** Tamu melihat nama mereka di layar, lalu menekan "Buka Undangan".
3.  **Musik & Konten:** Musik mulai diputar secara otomatis (jika diizinkan browser), konten muncul dengan animasi *scroll*.
4.  **Interaksi:** Tamu melihat lokasi, melihat foto.

---

## 6. Pedoman Desain (UI/UX)
* **Tema Warna:** Earth tone atau pastel yang lembut (Contoh: Beige, Soft Green, atau Warm White).
* **Tipografi:** Judul menggunakan font Serif yang elegan, isi menggunakan Sans-Serif yang bersih.
* **Animasi:** Gunakan library AOS (Animate On Scroll) untuk efek transisi antar section agar terlihat premium.
s
---

## 7. Strategi Deployment di GitHub Pages
1.  Repositori diset publik.
2.  Konfigurasi `base` path pada Vite/Webpack sesuai dengan nama repo (jika bukan `username.github.io`).
3.  Gunakan **GitHub Actions** untuk proses *build* otomatis setiap kali ada `push` ke branch utama.