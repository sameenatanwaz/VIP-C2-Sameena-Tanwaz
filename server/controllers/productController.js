const Product = require("../models/Product");

const getProducts = async (req, res) => {
    console.log("GET PRODUCTS CALLED");

    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { getProducts };