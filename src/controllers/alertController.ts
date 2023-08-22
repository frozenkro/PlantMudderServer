import express, { Request, Response } from "express";
import logger from "../util/logger";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
    logger.info(req.body);
    res.status(200).send();
});
router.get("/test", (req: Request, res: Response) => {
    logger.info(Date());
    res.status(200).send();
});

export default router;