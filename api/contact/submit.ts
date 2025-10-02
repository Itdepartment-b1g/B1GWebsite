/**
 * Vercel Serverless API Route: /api/contact/submit
 * 
 * NOTE: In Vercel, folder structure matters!
 * File: /api/contact/submit.ts becomes endpoint: /api/contact/submit
 * 
 * This wraps the Backend controller for serverless compatibility
 */

import { VercelRequest, VercelResponse } from '@vercel/node';
import cors from 'cors';
import contactController from '../../Backend/controller/contactController';

// Initialize CORS
const corsHandler = cors({
  origin: [
    process.env.CORS_ORIGIN || "http://localhost:3000",
    "http://localhost:8080",
    "http://localhost:8081",
    "http://localhost:5173",
    /\.vercel\.app$/, // Allow all Vercel preview domains
    "https://b1gcorporation.com",
    "https://www.b1gcorporation.com"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

// Helper to run Express middleware in Vercel
function runMiddleware(req: VercelRequest, res: VercelResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    console.log('🚀 [Vercel] /api/contact/submit called');
    console.log('📝 Method:', req.method);
    console.log('📦 Body:', JSON.stringify(req.body).substring(0, 100));

    // Run CORS middleware
    await runMiddleware(req, res, corsHandler);

    // Handle preflight OPTIONS requests
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({
        success: false,
        message: 'Method not allowed'
      });
    }

    // Call the existing Backend controller
    // Vercel req/res types are compatible with Express
    await contactController.submitContactForm(req as any, res as any);
    
    console.log('✅ [Vercel] Controller executed successfully');

  } catch (error) {
    console.error('❌ [Vercel] Error:', error);
    
    // Only send response if not already sent by controller
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? (error as Error).message : 'Something went wrong'
      });
    }
  }
}
