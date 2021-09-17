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
    });

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