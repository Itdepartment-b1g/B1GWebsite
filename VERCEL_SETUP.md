# 🚀 Vercel Frontend Setup

## ✅ Your Backend URL
```
https://b1gwebsite.onrender.com
```

## 📝 Vercel Environment Variable Configuration

### **Step 1: Go to Vercel Dashboard**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your B1G Website project
3. Click **Settings** tab
4. Click **Environment Variables** in the left sidebar

### **Step 2: Add Environment Variable**

**Variable Name:**
```
VITE_API_URL
```

**Value:**
```
https://b1gwebsite.onrender.com
```

**Environments to apply:**
- ✅ Production
- ✅ Preview
- ✅ Development

Click **Save**

### **Step 3: Redeploy**

After adding the environment variable, redeploy your application:
- Go to **Deployments** tab
- Click on the latest deployment
- Click **Redeploy** button

OR simply push a new commit:
```bash
git add .
git commit -m "Configure Render backend URL"
git push origin main
```

---

## 🧪 Testing Your Setup

### **Test Backend Health:**
```bash
curl https://b1gwebsite.onrender.com/health
```

**Expected Response:**
```json
{
  "status": "OK",
  "message": "B1G Corporation API is running",
  "timestamp": "2025-10-02T..."
}
```

### **Test Contact Endpoint:**
```bash
curl -X POST https://b1gwebsite.onrender.com/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "contactNumber": "+1234567890",
    "email": "test@example.com",
    "companyName": "Test Company",
    "region": "Test Region",
    "city": "Test City",
    "barangay": "Test Barangay",
    "streetAddress": "123 Test St",
    "businessTypes": ["Retail"],
    "message": "This is a test message"
  }'
```

---

## 🔍 Verify in Browser

After deployment:

1. Visit your Vercel site
2. Open **Browser Console** (F12 → Console tab)
3. Go to **Contact** page
4. Submit a form
5. Check console logs - you should see:
   ```
   Submitting to: https://b1gwebsite.onrender.com/api/contact/submit
   ```

---

## ⚠️ Important: Update CORS in Render

Make sure to update your **CORS_ORIGIN** environment variable in Render:

**Render Dashboard → Environment → Add Variable:**

```bash
CORS_ORIGIN=https://your-actual-vercel-url.vercel.app
```

Replace with your actual Vercel deployment URL!

---

## 📊 Environment Variables Summary

### **Vercel (Frontend):**
| Variable | Value |
|----------|-------|
| `VITE_API_URL` | `https://b1gwebsite.onrender.com` |

### **Render (Backend):**
| Variable | Value |
|----------|-------|
| `NODE_VERSION` | `22.x` |
| `NODE_ENV` | `production` |
| `CORS_ORIGIN` | `https://your-vercel-url.vercel.app` |
| `EMAIL_HOST` | Your SMTP host |
| `EMAIL_USER` | Your email |
| `EMAIL_PASS` | Your password |
| `GOOGLE_SHEETS_ID` | Your sheet ID |
| `GOOGLE_SHEETS_CREDENTIALS` | Your credentials JSON |

---

## ✅ Checklist

- [ ] Vercel environment variable `VITE_API_URL` set to `https://b1gwebsite.onrender.com`
- [ ] Render environment variable `CORS_ORIGIN` set to your Vercel URL
- [ ] Backend health check working
- [ ] Frontend deployed and loading
- [ ] Contact form submitting successfully
- [ ] No CORS errors in console

---

## 🎉 You're Ready!

Your frontend on Vercel will now communicate with your backend on Render!

**Backend:** https://b1gwebsite.onrender.com
**Frontend:** https://your-project.vercel.app

