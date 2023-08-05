import express from 'express';
import { getAll } from '../controller/SellController.js';
const router = express.Router();

router.get('/', getAll)

export default router;