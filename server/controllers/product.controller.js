// const { findById } = require('../models/product.model');
const Product = require('../models/product.model');
// const { v4: uuidv4 } = require('uuid');
// let path = require('path');
// const multer = require('multer');
// const router = require('express').Router();


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'images');
//     },
//     filename: function (req, file, cb) {
//         cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if (allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// let upload = multer({ storage, fileFilter });

// module.exports.createProduct = (upload.single('photo'), (req, res) => {
//     const title = req.body.title;
//     const description = req.body.description;
//     const category = req.body.category;
//     const photo = req.filename;

//     const newProductData = {
//         title,
//         description,
//         category,
//         photo
//     }

//     const newProduct = new Product(newProductData);

//     newProduct.save()
//         .then(() => res.json('User Added'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });



// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// let upload = multer({ storage, fileFilter });



// module.exports.createProduct = (upload.single('photo'),(req,res)) => {
//     console.log("Inside createProduct");
//     Product.create(req.file, req.body)
//         .then((newProduct)=> {
//             console.log(newProduct);
//             res.json(newProduct)
//         })
//         .catch((err)=> {
//             console.log(err);
//             res.json(err);
//         })
// }

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


module.exports.getAllProducts = (req, res) => {
    console.log("Inside getAllProducts");
    Product.find({})
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}

module.exports.getSingleProduct = (req, res) => {
    console.log('Inside single product');
    Product.findById(req.params.id)
        .then((singleProduct) => {
            console.log(singleProduct);
            res.json(singleProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}

module.exports.deleteProduct = (req, res) => {
    console.log("Inside deleteProduct");
    Product.findByIdAndDelete(req.params.id)
        .then((deletedProduct) => {
            console.log(deletedProduct);
            res.json(deletedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}

module.exports.updateProduct = (req, res) => {
    console.log("Inside updateProduct");
    Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
        .then((updatedProduct) => {
            console.log(updatedProduct);
            res.json(updatedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}
