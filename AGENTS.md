# 🤖 AGENTS.md - Development & Security Guidelines for Coding Agents

This project ([Ngulikcuy.com](https://ngulikcuy.com)) is an automated tech media portal built with Astro SSG and Google Apps Script.

## Quick Reference
- **Local Dev Server:** `npx astro dev` (inside `Web Blog Otomatis/`)
- **Build & Validate:** `npx astro build`
- **Content Collection Dir:** `Web Blog Otomatis/src/content/blog/`
- **Autoblog Engine:** `autoblog.gs` (Google Apps Script with Gemini 3.6 Flash + Google News RSS)

## Safety & Security Protocols
1. **Never commit secrets:** Keep `autoblog.gs`, `.env`, API keys, and GitHub PATs ignored via `.gitignore`.
2. **Schema strictness:** Always use relative paths for `heroImage` (e.g. `../../assets/blog-placeholder-1.jpg`).
3. **Monetization:** Do not remove Adsterra banner or social bar script tags in `BlogPost.astro`.
4. **Skills Repository:** 160+ specialized skills available in `.agents/skills/`.
