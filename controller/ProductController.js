import Product from "../model/Product.js";
import Sell from "../model/Sell.js";

export const save = async (req, res) => {
    try {
     
    const { name, price, description, image, category, stock } = req.body;
    const newProduct = new Product({ name, price, description, image, category, stock });
    const productSaved = await newProduct.save();
    res.status(201).json({ "status":true ,"data":productSaved});   
    } catch (error) {
        // console.log(error)
        return res.status(500).json({"status":false,"error":error})
        
    }
}

export const getAll = async (req, res) => {

    try {
        const products = await Product.find();
        res.status(200).json({"status":true,"data":products})
    } catch (error) {
        console.log(error)
        return res.status(500).json({"status":false,"error":error})
    }
}

export const getOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({"status":true,"data":product})
    } catch (error) {
        console.log(error)
        return res.status(500).json({"status":false,"error":error})
    }
}

export const update = async (req, res) => {
    const id = req.params.id;
    const { name, price, description, image, category, stock } = req.body;
    
    try {
        
        await Product.findByIdAndUpdate(id, { name, price, description, image, category, stock });
        res.status(200).json({"status":true,"message":"Product Updated", "data": { name, price, description, image, category, stock }})
        
        
    } catch (error) {
        res.status(500).json({"status":false,"error":error})
        
    }

}

export const remove = async (req, res) => {

    const id = req.params.id;
    try {
        const product = Product.findById(id);
        await Product.findByIdAndDelete(id);
        res.status(200).json({"status":true,"message":"Product Deleted succesfully"})
    }catch (error) {
        res.status(500).json({"status":false,"error":error})
    }
}

export const sell = async (req, res) => {
    const id = req.params.id;
    const { stock, quantity, name, price } = req.body;

    if (stock < quantity) {
        return res.status(400).json({ "status": false, "message": "The amount exceeds the stock" });
    }

    try {
        await Product.findByIdAndUpdate(id, { stock: stock - quantity });
        const total = quantity * price;
        const newSell = new Sell({ product: name, quantity, total });
        console.log(newSell);
        const response = await newSell.save();

        res.status(200).json({ "status": true, "message": "Product Sold successfully" });
    } catch (error) {
        res.status(500).json({ "status": false, "error": error });
    }
}

