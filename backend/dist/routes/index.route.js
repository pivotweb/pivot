"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsletter_controller_1 = require("../controllers/newsletter.controller");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Hello World!");
});
// Newsletter subscription route
router.post("/newsletter/subscribe", newsletter_controller_1.subscribeToNewsletter);
exports.default = router;
