"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const env_1 = require("./utils/env");
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", index_route_1.default);
app.get("/", (req, res) => {
    res.send("Api is running Successfully");
});
app.listen(env_1.PORT, () => {
    console.log("Server is running on port 3000");
});
