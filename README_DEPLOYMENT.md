# 🚀 Quick Deployment Guide

**Status**: ✅ **READY TO DEPLOY**

This is a quick-start guide for deploying the Green Valley Ranch Insider website to Vercel.

---

## ⚡ 5-Minute Deployment

### Step 1: Connect to Vercel (2 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import from GitHub: `DrJanDuffy/greenvalleyranchinsider.com`
4. Select the repository

### Step 2: Configure Environment Variables (2 minutes)

In Vercel project settings → Environment Variables, add:

**Required:**
```
AI_GATEWAY_API_KEY=your_key_here
EXA_API_KEY=your_key_here
```

**Recommended:**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_code
NEXT_PUBLIC_SITE_URL=https://greenvalleyranchinsider.com
```

### Step 3: Deploy (1 minute)

1. Click "Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Site will be live at your Vercel URL

**That's it!** Your site is now live.

---

## 📋 Post-Deployment Checklist

After deployment, complete these tasks:

### Immediate (15 minutes)
- [ ] Verify site loads correctly
- [ ] Test homepage
- [ ] Test navigation
- [ ] Check mobile view

### Images (15 minutes)
- [ ] Create `/public/og-image.jpg` (1200x630px)
- [ ] Create `/public/favicon.ico`
- [ ] Create `/public/apple-touch-icon.png` (180x180px)
- [ ] Create `/public/favicon-32x32.png`
- [ ] Create `/public/favicon-16x16.png`

### Google Services (30 minutes)
- [ ] Set up Google Analytics 4
- [ ] Add Measurement ID to Vercel env vars
- [ ] Verify Google Search Console
- [ ] Submit sitemap: `https://greenvalleyranchinsider.com/sitemap.xml`

### Testing (30 minutes)
- [ ] Test all forms
- [ ] Test RealScout widgets
- [ ] Test Homebot widget
- [ ] Test mobile navigation
- [ ] Test all links

**Total Time**: ~1.5 hours

---

## 🔗 Important URLs

After deployment, these will be available:

- **Site**: `https://greenvalleyranchinsider.com` (or your Vercel URL)
- **Sitemap**: `https://greenvalleyranchinsider.com/sitemap.xml`
- **Robots**: `https://greenvalleyranchinsider.com/robots.txt`
- **Manifest**: `https://greenvalleyranchinsider.com/manifest.json`

---

## 📚 Full Documentation

For detailed information, see:

- **`DEPLOYMENT_CHECKLIST.md`** - Complete deployment checklist
- **`GOOGLE_SEO_SETUP.md`** - SEO setup instructions
- **`DEVELOPMENT_GUIDE.md`** - Development workflow
- **`QUICK_REFERENCE.md`** - Quick code reference
- **`COMPLETION_REPORT.md`** - Full project report
- **`FINAL_STATUS.md`** - Final status summary

---

## ✅ Pre-Deployment Verification

Before deploying, verify:

- ✅ All code committed to GitHub
- ✅ Build completes successfully (`pnpm build`)
- ✅ No TypeScript errors
- ✅ No linting errors
- ✅ Environment variables ready

---

## 🆘 Troubleshooting

### Build Fails
- Check environment variables are set
- Verify all dependencies installed
- Check build logs in Vercel

### Widgets Not Loading
- Verify RealScout script loads (check Network tab)
- Check browser console for errors
- Verify agent/office IDs are correct

### Forms Not Submitting
- Check API routes are accessible
- Verify environment variables set
- Check Vercel function logs

---

## 📞 Support

For issues or questions:
1. Check documentation files
2. Review `QUICK_REFERENCE.md`
3. Check Vercel deployment logs
4. Review browser console for errors

---

**Ready to deploy?** Follow the 5-minute guide above! 🚀
