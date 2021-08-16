const Product = require('../models/product.model');

module.exports.createProduct = (req,res) => {
    console.log("Inside createProduct");
    Product.create(req.body)
        .then((newProduct)=> {
            console.log(newProduct);
            res.json(newProduct)
        })
        .catch((err)=> {
            console.log(err);
            res.json(err);
        })
}