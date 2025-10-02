# 📧 SendGrid Email Setup for Render

## Why SendGrid Instead of Gmail SMTP?

**Problem:** Render's free tier blocks outbound SMTP (port 587) connections, causing Gmail SMTP to timeout.

**Solution:** Use SendGrid's HTTP API instead of SMTP. It's free, reliable, and works perfectly with Render!

---

## 🚀 Quick Setup (5 Minutes)

### **Step 1: Create SendGrid Account**

1. Go to [SendGrid](https://sendgrid.com/)
2. Sign up for a **FREE account** (100 emails/day forever)
3. Verify your email address

### **Step 2: Create API Key**

1. Log in to SendGrid Dashboard
2. Go to **Settings** → **API Keys**
3. Click **Create API Key**
4. Name: `B1G-Website-Render`
5. Permissions: **Full Access** (or just **Mail Send**)
6. Click **Create & View**
7. **COPY THE API KEY** (you'll only see it once!)
   ```
   SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### **Step 3: Verify Sender Identity**

SendGrid requires you to verify your sender email:

1. Go to **Settings** → **Sender Authentication**
2. Choose **Single Sender Verification** (easiest for free tier)
3. Click **Create New Sender**
4. Fill in:
   - **From Name:** B1G Corporation
   - **From Email Address:** noreply@b1gcorporation.com (or your actual email)
   - **Reply To:** contact@b1gcorporation.com
   - Fill in company details
5. Click **Create**
6. **Check your email** and verify the sender

### **Step 4: Add Environment Variable in Render**

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Select your **b1gwebsite** service
3. Go to **Environment** tab
4. Click **Add Environment Variable**
5. Add:
   ```
   Name: SENDGRID_API_KEY
   Value: SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
6. Also update:
   ```
   Name: EMAIL_FROM
   Value: noreply@b1gcorporation.com (must match verified sender!)
   ```
7. Click **Save Changes**
8. Render will automatically redeploy

---

## ✅ What's Changed in Your Code

I've updated your backend to **automatically choose** the best email service:

```typescript
// New logic in contactController.ts:
if (process.env.SENDGRID_API_KEY) {
  // Use SendGrid (works on Render)
  sendgridService.sendEmail(...)
} else {
  // Fallback to SMTP (works locally)
  emailService.sendEmail(...)
}
```

**Benefits:**
- ✅ Works on Render (no SMTP blocking)
- ✅ Still works locally with Gmail SMTP
- ✅ Faster delivery (HTTP API vs SMTP)
- ✅ Better deliverability
- ✅ No timeout issues

---

## 🧪 Testing

### **Test After Render Deployment:**

1. Wait for Render to redeploy (2-3 minutes)
2. Go to your website: https://b1-g-website.vercel.app
3. Fill out and submit the contact form
4. Check Render logs - you should see:
   ```
   ✅ SendGrid service initialized
   ✅ Email sent successfully via SendGrid: user@example.com
   ```

### **Check Your Email:**

- Customer should receive thank you email
- You should receive notification email at `EMAIL_TO` address

---

## 🔧 Render Environment Variables (Complete List)

After setup, your Render environment variables should look like:

```bash
# Node.js
NODE_VERSION=22.x
NODE_ENV=production

# SendGrid Email (NEW!)
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EMAIL_FROM=noreply@b1gcorporation.com
EMAIL_TO=contact@b1gcorporation.com

# Google Sheets
GOOGLE_SHEETS_ID=1BPF31LLiJhZ2uIDn6JZb1GDrZhGHV6lUF-4-_yyjqKk
GOOGLE_SHEETS_CREDENTIALS={...your-json-credentials...}

# CORS
CORS_ORIGIN=https://b1-g-website.vercel.app

# Optional (old SMTP - no longer needed but won't hurt)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=itdepartment.b1g@gmail.com
EMAIL_PASS=your-app-password
```

---

## 💰 SendGrid Free Tier Limits

- **100 emails/day** - More than enough for contact forms!
- **Unlimited contacts**
- **Email validation**
- **Real-time analytics**

If you need more, paid plans start at $15/month for 40,000 emails.

---

## 🆘 Troubleshooting

### **Error: "Sender not verified"**
- **Solution:** Complete Step 3 (Sender Verification) above
- Check your email for verification link

### **Error: "Invalid API Key"**
- **Solution:** Double-check the API key in Render environment variables
- Make sure there are no extra spaces

### **Emails still not sending:**
- Check Render logs for specific error messages
- Verify `EMAIL_FROM` matches your verified sender
- Make sure you saved and redeployed after adding variables

---

## 📊 SendGrid Dashboard

Monitor your emails:
- **Activity Feed:** See all sent emails
- **Stats:** Open rates, click rates
- **Alerts:** Get notified of issues

---

## 🎉 Done!

Your email service now works reliably on Render! The form will:
1. ✅ Save data to Google Sheets
2. ✅ Send thank you email to customer (via SendGrid)
3. ✅ Send notification email to you (via SendGrid)

**No more timeouts!** 🚀

