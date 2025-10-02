import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: [
    process.env.CORS_ORIGIN || "http://localhost:3000",
    "http://localhost:8080",
    "http://localhost:8081",
    "http://localhost:5173",
    /\.vercel\.app$/, // Allow all Vercel preview deployments
    "https://b1gcorporation.com",
    "https://www.b1gcorporation.com"
  ],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'B1G Corporation API is running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/contact', contactRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    error: 'The requested endpoint does not exist'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 B1G Corporation API server running on port ${PORT}`);
  console.log(`📧 Email service: ${process.env.EMAIL_HOST ? 'Configured' : 'Not configured'}`);
  console.log(`📊 Google Sheets: ${process.env.GOOGLE_SHEETS_ID ? 'Configured' : 'Not configured'}`);
  console.log(`🌐 CORS Origin: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
});

export default app;
