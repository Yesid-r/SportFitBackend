import express  from "express";
import {save,getAll, getOne, remove, update, sell} from "../controller/ProductController.js";
const router = express.Router();

router.post('/save',save)
router.get('/getAll',getAll)
router.get('/getOne/:id',getOne)
router.put('/update/:id',update)
router.delete('/remove/:id',remove)
router.post('/updateStock/:id', sell)

export default router