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
    category: {
        type: String,
        required: [true, "You must pick a category for this product."],
        enum: [
            'Grocery', 
            'Cleaning', 
            'Personal Hygiene',
            'Household',
            'Outdoor Systems',
            'Adventure Gear',
            'Clothing',
            'Miscellaneous',
        ],
        default: 'Miscellaneous',
    },
    notes: {
        type: String,
        required: false,
    }
    // photo: {
    //     type: String,
    //     required: false,
    // },
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);