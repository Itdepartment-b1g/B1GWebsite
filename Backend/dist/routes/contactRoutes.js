"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactController_1 = __importDefault(require("../controller/contactController"));
const router = (0, express_1.Router)();
// POST /api/contact/submit - Submit contact form
router.post('/submit', contactController_1.default.submitContactForm);
// GET /api/contact/data - Get all contact data (for admin purposes)
router.get('/data', contactController_1.default.getContactData);
exports.default = router;
//# sourceMappingURL=contactRoutes.js.map