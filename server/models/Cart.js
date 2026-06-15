const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: { type: String },
    title: { type: String },
    description: { type: String },
    mainImg: { type: String },
    size: { type: String },
    quantity: { type: String },
    price: { type: Number },
    discount: { type: Number }
});

module.exports = mongoose.model("Cart", cartSchema);