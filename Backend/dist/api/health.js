"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
function handler(req, res) {
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
//# sourceMappingURL=health.js.map