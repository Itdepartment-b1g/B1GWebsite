import { VercelRequest, VercelResponse } from '@vercel/node';
import contactController from '../Backend/controller/contactController';

/**
 * Vercel Serverless Function for Contact Form Submission
 * This wraps the existing Express controller for Vercel compatibility
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    console.log('🚀 Vercel Function: /api/contact-submit called');
    console.log('📦 Request body:', JSON.stringify(req.body, null, 2));
    
    // Call the existing Express controller
    // Cast to Express types since Vercel types are compatible
    await contactController.submitContactForm(req as any, res as any);
    
    console.log('✅ Controller executed successfully');
  } catch (error) {
    console.error('❌ Vercel Function Error:', error);
    
    // Only send response if not already sent
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? (error as Error).message : 'Something went wrong'
      });
    }
  }
}

