import React, { useState } from 'react';
import ProductForm from './ProductForm';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateProduct = (props) => {
    const [errors, setErrors] = useState({});

    const [product, setProduct] = useState({
        "title": "",
        "description": "",
        "category": "",
        "notes": "",
        // "photo": "",
    });


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('photo', product.photo);
    //     formData.append('title', product.title);
    //     formData.append('description', product.description);
    //     formData.append('category', product.category);

    //     axios.post('http://localhost:8000/api/products', formData)
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', product)
            .then((res) => {
                console.log(res.data);
                if (res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    setProduct(res);
                    navigate('/api/products');
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div class="white-bg">
            <Link to={'/api/products'}>
                <FontAwesomeIcon icon="chevron-circle-left" class="back-icon"></FontAwesomeIcon></Link>

            <h3 id="create-product-title">Create Product</h3>
            <ProductForm
                product={product}
                setProduct={setProduct}
                errors={errors}
                handleSubmit={handleSubmit}
                submitButtonLabel={"Create Product"}
            />
        </div>
    )
}

export default CreateProduct;