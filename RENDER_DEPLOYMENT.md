# 🚀 Render Backend Deployment Guide

## Architecture Overview

```
┌─────────────────────┐         ┌─────────────────────┐
│  Frontend (Vercel)  │────────>│  Backend (Render)   │
│  React + Vite       │  HTTPS  │  Express + Node.js  │
│  Static Site        │         │  API Server         │
└─────────────────────┘         └─────────────────────┘
```

---

## 📋 Render Configuration

### **1. Service Settings**

| Setting | Value |
|---------|-------|
| **Name** | `b1g-backend` (or your choice) |
| **Environment** | `Node` |
| **Region** | Choose closest to your users |
| **Branch** | `main` |
| **Root Directory** | `Backend` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |

### **2. Environment Variables**

Go to **Environment** tab and add these variables:

#### **Required - Node.js**
```bash
NODE_VERSION=22.x
NODE_ENV=production
PORT=3001
```

#### **Required - Email Service**
```bash
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
EMAIL_FROM=noreply@b1gcorporation.com
EMAIL_TO=contact@b1gcorporation.com
```

#### **Required - Google Sheets**
```bash
GOOGLE_SHEETS_ID=1ABC123...xyz
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"..."}
```
*Note: Paste the entire JSON credentials as a single line*

#### **Required - CORS**
```bash
CORS_ORIGIN=https://your-frontend.vercel.app
```
*Update this with your actual Vercel domain after deployment*

---

## 🌐 Frontend Configuration (Vercel)

### **Environment Variable to Set in Vercel:**

**Dashboard → Settings → Environment Variables:**

```bash
VITE_API_URL=https://b1gwebsite.onrender.com
```

✅ **Your actual Render URL is ready to use!**

---

## 📝 Step-by-Step Deployment

### **Step 1: Deploy Backend to Render**

1. **Go to [Render Dashboard](https://dashboard.render.com/)**
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure settings:
   - **Root Directory:** `Backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
5. Add all environment variables (see above)
6. Click **"Create Web Service"**
7. Wait for deployment (5-10 minutes)
8. **Copy your Render URL:** `https://your-backend.onrender.com`

### **Step 2: Update Frontend Configuration**

1. **Update CORS in Backend** (already done):
   ```typescript
   // Backend/server.ts now includes:
   /\.vercel\.app$/, // Allows all Vercel domains
   ```

2. **Set Environment Variable in Vercel:**
   - Go to Vercel Dashboard
   - Project Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://your-backend.onrender.com`
   - Apply to: Production, Preview, Development

### **Step 3: Deploy Frontend to Vercel**

```bash
git add .
git commit -m "feat: Configure for Render backend deployment"
git push origin main
```

Vercel will auto-deploy with the new environment variable.

---

## 🧪 Testing

### **Test Backend Health:**
```bash
curl https://your-backend.onrender.com/health
```

**Expected Response:**
```json
{
  "status": "OK",
  "message": "B1G Corporation API is running",
  "timestamp": "2025-10-02T..."
}
```

### **Test Frontend Contact Form:**
1. Go to your deployed Vercel site
2. Navigate to Contact page
3. Fill out and submit the form
4. Check browser console for API URL (debug log)
5. Verify form submission succeeds

---

## 🔍 Troubleshooting

### **Issue: CORS Error**
**Error:** `Access to fetch has been blocked by CORS policy`

**Solutions:**
1. Verify `CORS_ORIGIN` in Render matches your Vercel URL
2. Check that your Vercel domain ends with `.vercel.app`
3. Try setting `CORS_ORIGIN=*` temporarily for testing

### **Issue: 503 Service Unavailable**
**Cause:** Render free tier spins down after 15 minutes of inactivity

**Solution:** 
- First request may take 30-60 seconds (cold start)
- Consider upgrading to paid tier for always-on service
- Or use a service like UptimeRobot to ping your backend every 14 minutes

### **Issue: Environment Variables Not Loading**
**Check:**
1. Variables are set in Render dashboard (not .env file)
2. Redeployed after adding variables
3. No typos in variable names
4. JSON credentials are properly formatted (single line)

### **Issue: Build Fails**
**Common causes:**
1. Wrong root directory (should be `Backend`)
2. Node version mismatch (use 22.x)
3. Missing dependencies (check package.json)

---

## 📊 Monitoring

### **Render Dashboard:**
- **Logs:** View real-time application logs
- **Metrics:** Monitor CPU, memory usage
- **Events:** Track deployments and restarts

### **Useful Commands:**
```bash
# View latest logs
curl https://your-backend.onrender.com/health

# Test contact endpoint
curl -X POST https://your-backend.onrender.com/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","email":"test@example.com",...}'
```

---

## 💰 Render Pricing Considerations

### **Free Tier:**
- ✅ 750 hours/month
- ✅ Automatic SSL
- ⚠️ Spins down after 15 min inactivity
- ⚠️ Slower cold starts (30-60s)

### **Starter ($7/month):**
- ✅ Always on (no spin down)
- ✅ Faster performance
- ✅ 400 build minutes

---

## 🔐 Security Checklist

- [ ] Environment variables set (not in code)
- [ ] CORS configured for your domain only
- [ ] API keys stored securely in Render
- [ ] HTTPS enabled (automatic on Render)
- [ ] Rate limiting considered (future enhancement)
- [ ] Input validation enabled in backend

---

## 📦 What Gets Deployed

### **Backend on Render:**
```
Backend/
├── dist/               (Compiled TypeScript)
│   ├── server.js
│   ├── controller/
│   ├── services/
│   └── types/
├── node_modules/
└── package.json
```

### **Frontend on Vercel:**
```
Frontend/
├── dist/               (Built React app)
│   ├── index.html
│   ├── assets/
│   └── *.js, *.css
```

---

## 🎯 Quick Reference

| What | Where | URL Pattern |
|------|-------|-------------|
| **Frontend** | Vercel | `https://your-project.vercel.app` |
| **Backend** | Render | `https://your-backend.onrender.com` |
| **API Endpoint** | Render | `https://your-backend.onrender.com/api/contact/submit` |
| **Health Check** | Render | `https://your-backend.onrender.com/health` |

---

## ✅ Deployment Checklist

### **Before Deploying:**
- [ ] Backend builds locally: `cd Backend && npm run build`
- [ ] Frontend builds locally: `cd Frontend && npm run build`
- [ ] Environment variables prepared
- [ ] Google Sheets credentials ready
- [ ] Email credentials ready

### **After Backend Deployment (Render):**
- [ ] Health endpoint working
- [ ] Environment variables verified
- [ ] Logs showing no errors
- [ ] Render URL copied

### **After Frontend Deployment (Vercel):**
- [ ] `VITE_API_URL` set in Vercel
- [ ] Frontend loads correctly
- [ ] Contact form submits successfully
- [ ] No CORS errors in console

---

## 🚀 You're Ready!

Your backend will be deployed on Render with all the API endpoints, and your frontend on Vercel will call it via HTTPS. No CORS issues because we've configured it properly!

**Last Updated:** October 2, 2025

