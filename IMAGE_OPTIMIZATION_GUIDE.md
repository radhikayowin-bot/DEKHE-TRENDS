# Image Optimization Guide for Dekhe Trends

## 🎯 Goal: All images under 150KB, WebP format

### Tools to Use:

1. **Online Tools:**
   - https://squoosh.app/ (Google's image optimizer)
   - https://tinypng.com/ (PNG/JPG compression)
   - https://cloudconvert.com/webp-converter (Convert to WebP)

2. **Command Line (if you have ImageMagick):**
   ```bash
   # Convert to WebP
   magick convert input.jpg -quality 80 output.webp
   
   # Resize and convert
   magick convert input.jpg -resize 1200x -quality 80 output.webp
   ```

### Image Size Guidelines:

| Image Type | Max Width | Max Size | Format |
|------------|-----------|----------|--------|
| Hero Images | 1920px | 150KB | WebP |
| Service Cards | 800px | 80KB | WebP |
| Blog Thumbnails | 600px | 60KB | WebP |
| Icons | 200px | 20KB | WebP/SVG |
| Logos | 400px | 30KB | WebP/SVG |

### Implementation Steps:

1. **Collect all images** from your design
2. **Resize** to appropriate dimensions
3. **Convert to WebP** format
4. **Compress** to target size
5. **Add to** `client/public/images/` folder
6. **Update** image paths in components

### Lazy Loading Implementation:

Already implemented in components. Use this pattern:

```tsx
<img 
  src="/images/your-image.webp" 
  alt="Description"
  loading="lazy"
  width="800"
  height="600"
/>
```

### Current Images to Optimize:

- [ ] favicon.png → Convert to WebP (already small)
- [ ] Add hero images for pages
- [ ] Add service card images
- [ ] Add city page images
- [ ] Add blog post images

### WebP Browser Support:

WebP is supported by 95%+ browsers. For fallback:

```tsx
<picture>
  <source srcSet="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.jpg" alt="Hero" loading="lazy" />
</picture>
```
