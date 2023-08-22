import express, { Request, Response } from "express";
import logger from "../util/logger";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
    logger.info(req.body);
});
router.get("/test", (req: Request, res: Response) => {
    logger.info(Date());
    res.send("success");
});

export default router;