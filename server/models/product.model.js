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
            'Kitchen', 
            'Food', 
            'On-the-Go',
            'Laundry',
            'Cleaning',
            'Personal Care',
            'Clothing',
            'Miscellaneous',
        ],
        default: 'Miscellaneous',
    },
    notes: {
        type: String,
        required: [true, "You must write a note about this product."],
        minlength: [2, "Notes must be at least two characters long."],
    }
    // photo: {
    //     type: String,
    //     required: false,
    // },
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);