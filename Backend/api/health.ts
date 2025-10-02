import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  res.json({ 
    status: 'OK', 
    message: 'B1G Corporation API is running on Vercel',
    timestamp: new Date().toISOString(),
    platform: 'Vercel Serverless'
  });
}

