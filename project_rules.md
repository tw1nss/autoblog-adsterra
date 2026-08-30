# PROJECT MASTER CONTEXT: Autoblog Jamstack Adsterra

## 1. Arsitektur Sistem
- **Tujuan:** Membangun sistem auto-posting artikel SEO untuk monetisasi Adsterra.
- **Backend/Otomasi:** Google Apps Script (GAS) dengan eksekusi Cron Job.
- **AI Generator:** API LLM (Fokus pada instruksi tanpa halusinasi format).
- **Penyimpanan Data:** GitHub Repository (menggunakan GitHub REST API).
- **Frontend/Hosting:** Astro Framework yang di-deploy ke Vercel (Static Site Generator).

## 2. Aturan Format Konten (Markdown & Frontmatter)
Semua output artikel yang dihasilkan oleh sistem AI HARUS mematuhi struktur ini tanpa pengecualian:
- DILARANG menyertakan teks percakapan, basa-basi pembuka, atau penutup (misal: "Berikut adalah artikelnya..."). 
- Karakter pertama dari output haruslah `---` untuk membuka YAML Frontmatter.
- Frontmatter wajib memuat variabel: `title`, `description`, `pubDate`, `heroImage`.

**Template Standar Output AI:**
---
title: "[Judul Artikel SEO Friendly]"
description: "[Deskripsi singkat artikel, maksimal 150 karakter]"
pubDate: YYYY-MM-DD
heroImage: '../../assets/blog-placeholder-1.jpg'
---
[Isi artikel dalam format Markdown murni. Gunakan H2 (##) dan H3 (###) untuk sub-judul. Pertahankan paragraf tetap pendek, gunakan format list/bullet points untuk mempermudah pembacaan cepat (scannability).]

## 3. Pedoman Pengembangan Kode GAS & Frontend
- Saat merancang skrip integrasi GitHub API, pastikan konten artikel di-encode menggunakan `base64` sebelum dikirim dengan metode `PUT`.
- Pemanggilan API AI harus memisahkan `System Prompt` (berisi aturan mutlak format) dan `User Prompt` (berisi variabel topik/kategori acak).
- Desain antarmuka frontend (UI) harus seminimal mungkin menggunakan JavaScript di sisi klien untuk memastikan kecepatan muat halaman tetap di bawah 1 detik, sehingga script iklan Adsterra (Social Bar & Popunder) dapat dirender sempurna.