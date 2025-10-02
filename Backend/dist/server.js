"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Middleware
app.use((0, cors_1.default)({
    origin: [
        process.env.CORS_ORIGIN || "http://localhost:3000",
        "http://localhost:8080",
        "http://localhost:8081",
        "http://localhost:5173"
    ],
    credentials: true
}));
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'B1G Corporation API is running',
        timestamp: new Date().toISOString()
    });
});
// API Routes
app.use('/api/contact', contactRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
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
exports.default = app;
//# sourceMappingURL=server.js.map