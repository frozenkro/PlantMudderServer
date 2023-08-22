"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("../util/logger"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    logger_1.default.info(req.body);
});
router.get("/test", (req, res) => {
    logger_1.default.info(Date());
    res.send("success");
});
exports.default = router;
