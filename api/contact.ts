import { VercelRequest, VercelResponse } from '@vercel/node';
import cors from 'cors';
import { contactController } from '../Backend/controller/contactController';

// Initialize CORS
const corsHandler = cors({
  origin: [
    process.env.CORS_ORIGIN || "http://localhost:3000",
    "http://localhost:8080",
    "http://localhost:8081",
    "http://localhost:5173",
    "https://b1gcorporation.com",
    "https://www.b1gcorporation.com"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

// Helper function to run middleware
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
    // Run CORS middleware
    await runMiddleware(req, res, corsHandler);

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    // Only allow POST requests for contact
    if (req.method !== 'POST') {
      return res.status(405).json({
        success: false,
        message: 'Method not allowed'
      });
    }

    // Call the contact controller
    await contactController.submitContact(req, res);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? (error as Error).message : 'Something went wrong'
    });
  }
}
