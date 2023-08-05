import Sell from "../model/Sell.js";

export const getAll = async (req, res) => {
    try {
        const sells = await Sell.find();
        res.status(200).json({ status: true, data: sells });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, error: error });
    }
}