# Quick Start Guide - MDA Artz

## 🚀 Getting Started

### First Time Setup
```bash
# Install dependencies
npm install

# You're ready to go!
```

### Generate SEO & Pinterest Files

1. **Create your product data file** (e.g., `products.json`):
   ```json
   [
     {
       "handle": "product-slug",
       "title": "Product Title",
       "description": "Product description for SEO",
       "alt": "Image alt text",
       "board": "Pinterest Board Name",
       "url": "https://your-store.com/products/product-slug",
       "tags": ["tag1", "tag2"],
       "image_url": "https://your-cdn.com/image.jpg"
     }
   ]
   ```

2. **Run the generator**:
   ```bash
   npm run generate:seo-pins products.json
   ```

3. **Find your files**:
   - SEO files: `build/seo/{handle}.json`
   - Pinterest CSV: `build/pins/pins.csv`

## 📋 Content Rules

### ✅ Allowed
- Neon colors: electric blue, teal, indigo
- Afro-anime themes
- Cyberpunk aesthetics
- Adult character designs

### ❌ Banned
- Colors: pink, rainbow (unless `ALLOW_PASTEL=true`)
- IP-protected characters
- Minor characters
- Sexualized content

## 🔧 Common Commands

```bash
# Install dependencies
npm install

# Run generator
npm run generate:seo-pins <input-file>

# Allow pastel colors (if needed)
ALLOW_PASTEL=true npm run generate:seo-pins <input-file>
```

## 📚 Documentation

- **Generator Guide**: `apps/generators/README.md`
- **Fix Summary**: `FIXES_SUMMARY.md`
- **Main README**: `README.md`

## ⚠️ Troubleshooting

### "Unknown file extension .ts"
→ Make sure you've run `npm install` first

### "Banned word detected"
→ Check your content for "pink" or "rainbow"
→ Or use `ALLOW_PASTEL=true` if appropriate

### Build directory in git
→ Already handled by `.gitignore` - no action needed

## 💡 Pro Tips

1. **Test with small files first** - Validate your JSON format
2. **Check output before upload** - Review generated files
3. **Keep descriptions under 160 chars** - Auto-truncates but better to optimize
4. **Use descriptive alt text** - Improves SEO and accessibility

## 📞 Need Help?

Check the detailed documentation:
- `apps/generators/README.md` - Complete generator guide
- `FIXES_SUMMARY.md` - What was fixed and why
- `docs/ISSUE_10_CLARIFICATION.md` - Issue context

---

**Repository Status**: ✅ Fully Functional  
**Last Updated**: 2025-10-13  
**Version**: 1.0.0
