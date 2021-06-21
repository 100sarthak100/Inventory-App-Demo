import mongoose from 'mongoose';
import Product from '../models/products.js';

// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// CREATE PRODUCT
export const createProduct = async (req, res) => {
    const product = req.body;

    const newProduct = new Product({
        ...product, createdAt: new Date().toISOString()
    });

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};