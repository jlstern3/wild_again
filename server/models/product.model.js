const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You are required to title the product."],
        minlength: [3, "Title must be at least three characters long."]
    },
    description: {
        type: String,
        required: [true, "You are required to describe the product."],
        minlength: [5, "Description must be at least five characters long."]
    },
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);