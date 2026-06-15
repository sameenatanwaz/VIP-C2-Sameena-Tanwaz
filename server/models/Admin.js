const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    banner: { type: String },
    categories: { type: Array }
});

module.exports = mongoose.model("Admin", adminSchema);