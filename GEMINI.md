# 🛡️ Ngulikcuy.com - Master AI Coding & Security Rules (GEMINI.md)

Dokumen ini adalah acuan utama instruksi, keamanan (*guardrails*), dan arsitektur untuk setiap agen AI yang bekerja pada repository ini.

---

## 1. Profil & Arsitektur Proyek
- **Website/Brand:** [Ngulikcuy.com](https://ngulikcuy.com) — Portal & Komunitas Ngulik Teknologi, AI, Coding, dan Gadget.
- **Frontend Stack:** Astro Framework (Static Site Generation / SSG), Vanilla CSS, responsive layout, performa tinggi (<1s load time).
- **Backend / Autoblog Engine:** Google Apps Script (`autoblog.gs`) dengan pemicu harian otomatis (*daily trigger*).
- **AI Synthesis Model:** Gemini API (`gemini-3.6-flash`) terintegrasi dengan Google News RSS feed.
- **Penyimpanan Konten:** File Markdown (`.md`) di `Web Blog Otomatis/src/content/blog/` melalui GitHub REST API.
- **Hosting / Deployment:** Vercel (Auto-deploy dari branch `main`).

---

## 2. Standar Format Konten & Schema Frontmatter
Semua artikel wajib mematuhi schema Astro Content Layer berikut:
```yaml
---
title: "Judul Artikel SEO Friendly"
description: "Deskripsi singkat dan padat maksimal 150 karakter"
pubDate: "YYYY-MM-DD"
heroImage: "../../assets/blog-placeholder-1.jpg"
---
```
- **Aturan Penulisan:**
  - Karakter pertama artikel setelah frontmatter harus langsung teks konten (mulai dari paragraf intro atau heading `## H2`).
  - DILARANG menggunakan heading `# H1` di dalam body (karena H1 sudah dipakai untuk judul utama).
  - Minimal 600 - 900 kata, terstruktur dengan sub-heading H2 & H3, bullet points, dan paragraf pendek (2-4 kalimat) agar mudah dibaca di mobile.

---

## 3. Aturan Keamanan Mutlak (DevOps & Security Guardrails)
1. **Secrets & API Keys Protection:**
   - DILARANG MENULIS atau ME-STAGING kredensial sensitif (Gemini API Key, GitHub PAT, Vercel Token) ke file yang ter-track Git.
   - File `autoblog.gs`, `.env`, `.env.*` HARUS selalu masuk dalam `.gitignore`.
2. **Preservasi Iklan Adsterra:**
   - Script iklan Adsterra (Native Banner di `BlogPost.astro` dan Social Bar script) wajib dipertahankan agar monetisasi tidak terganggu.
3. **Validasi Sebelum Commit & Push:**
   - Jalankan `npx astro build` secara lokal sebelum commit untuk memastikan tidak ada kesalahan kompilasi.

---

## 4. Katalog Agent Skills Aktif (.agents/skills)
Proyek ini dilengkapi dengan 160+ modul **DevOps, Security, and Cloud Agent Skills** di folder `.agents/skills/`:
- **Security & Secrets:** `secrets-management`, `ai-coding-agent-guardrails`, `web-security`, `container-security`
- **CI/CD & DevOps:** `github-actions-ci-cd`, `docker-ops`, `kubernetes-ops`, `terraform-pipeline`
- **AI Engineering:** `agent-evals`, `llmops-platform-engineering`, `llm-caching`, `rag-observability-evals`

Agen AI dapat merujuk file `SKILL.md` pada folder tersebut saat mengerjakan tugas yang membutuhkan panduan spesifik.
