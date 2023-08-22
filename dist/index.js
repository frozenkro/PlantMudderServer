"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alertController_1 = __importDefault(require("./controllers/alertController"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.use(express_1.default.json());
app.use('/alert', alertController_1.default);
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
