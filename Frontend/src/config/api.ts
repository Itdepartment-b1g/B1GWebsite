/**
 * API Configuration
 * Handles environment-specific API base URLs
 */

// Function to get API base URL
export const getApiBaseUrl = (): string => {
  // Check if we're in production (Vercel)
  const isProduction = window.location.hostname !== 'localhost' && 
                       window.location.hostname !== '127.0.0.1';
  
  // In production, use Render backend
  if (isProduction) {
    return 'https://b1gwebsite.onrender.com';
  }
  
  // In development, use local backend
  return import.meta.env.VITE_API_URL || 'http://localhost:3002';
};

// API endpoints
export const API_ENDPOINTS = {
  CONTACT_SUBMIT: '/api/contact/submit',
  HEALTH: '/health',
} as const;

// Get full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${getApiBaseUrl()}${endpoint}`;
};

