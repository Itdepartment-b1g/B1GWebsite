# Deployment Notes for B1G Website

## ⚠️ Critical: File System Case Sensitivity

### The Problem
- **Local Development (macOS/Windows)**: File systems are case-**insensitive**
  - `product hero banner 1.png` = `Product Hero Banner 1.png` ✅
  
- **Vercel/Production (Linux)**: File systems are case-**sensitive**
  - `product hero banner 1.png` ≠ `Product Hero Banner 1.png` ❌

### The Solution
**ALWAYS match the exact case of filenames in import statements.**

### Recently Fixed Issues
1. ✅ `ForgeAlpha.tsx` - Fixed import path from `product hero banner 1.png` to `Product Hero Banner 1.png`
2. ✅ **Node.js Version** - Set to 22.x across all package.json files (Vercel requirement as of Oct 2025)
   - Added `.nvmrc` file with Node.js 22
   - Added `"engines": { "node": "22.x" }` to all package.json files
   - Removed invalid runtime specification from `vercel.json` (Vercel reads from package.json engines field)
   - Note: Node.js 18.x was discontinued by Vercel
3. ✅ `api/contact.ts` - Fixed TypeScript import error
   - Changed from named import to default import: `import contactController from ...`
   - Fixed method name: `submitContactForm` instead of `submitContact`

### Best Practices

#### 1. Verify Asset Imports Before Deployment
Run this command to check all asset imports:
```bash
npm run build
```

#### 2. Use Consistent Naming Convention
- **Recommended**: Use kebab-case or camelCase for all asset files
  - ✅ `product-hero-banner-1.png`
  - ✅ `productHeroBanner1.png`
  - ❌ `Product Hero Banner 1.png` (spaces and mixed case)

#### 3. Double-Check After Adding New Assets
When adding new images/assets:
1. Note the exact filename (including case)
2. Use that exact case in your import statement
3. Test build locally before pushing

## Vercel Build Configuration

### Build Settings
- **Install Command**: `npm install && cd Backend && npm install && cd ../Frontend && npm install`
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `Frontend/dist`

### Environment Variables Required
Make sure these are set in Vercel dashboard:
- `CORS_ORIGIN` - Your production domain
- `EMAIL_HOST` - SMTP host
- `EMAIL_USER` - Email username
- `EMAIL_PASS` - Email password
- `GOOGLE_SHEETS_ID` - Google Sheets ID
- `GOOGLE_SHEETS_CREDENTIALS` - Google service account JSON

## Common Deployment Issues

### 1. Case Sensitivity Error
**Error**: `Could not resolve "../assets/Alpha/product hero banner 1.png"`

**Fix**: Match exact filename case in import statement

### 2. Permission Denied (TypeScript)
**Error**: `Permission denied: tsc`

**Fix**: Already handled by `npm run fix-permissions` in build script

### 3. Package Manager Conflicts
**Error**: `bun: command not found`

**Fix**: Removed `bun.lockb`, using only `npm` and `package-lock.json`

### 4. Node.js Version - Discontinued 18.x
**Error**: `Node.js Version "18.x" is discontinued and must be upgraded. Please set "engines": { "node": "22.x" }`

**Fix**: 
- Updated `.nvmrc` file to `22`
- Changed `"engines": { "node": "22.x" }` in ALL package.json files
- Vercel now requires Node.js 22.x (18.x support discontinued as of October 2025)

### 5. Invalid Function Runtime Specification
**Error**: `Function Runtimes must have a valid version, for example 'now-php@1.0.0'`

**Fix**:
- Removed the `functions` section from `vercel.json`
- Vercel automatically detects serverless functions in `/api` directory
- Node.js version is controlled by `engines` field in package.json files

## Testing Before Deployment

```bash
# 1. Clean build
npm run clean

# 2. Full build (same as Vercel)
npm run vercel-build

# 3. Verify no errors
# Should see: ✓ built in X.XXs
```

## File Structure
```
/B1GWebsite
├── Frontend/
│   ├── src/
│   │   ├── assets/      # ⚠️ Case-sensitive in production!
│   │   ├── components/
│   │   └── pages/
│   └── dist/            # Build output
├── Backend/
│   ├── controller/
│   ├── services/
│   └── dist/            # Build output
├── api/                 # Serverless functions
└── vercel.json          # Vercel configuration
```

## Useful Commands

```bash
# Clean all build artifacts
npm run clean

# Build everything
npm run build

# Build for Vercel (includes permission fix)
npm run vercel-build

# Development mode
npm run dev

# Backend only
npm run dev:backend

# Frontend only
npm run dev:frontend
```

## Last Updated
October 2, 2025 - Fixed case sensitivity issue in ForgeAlpha.tsx

