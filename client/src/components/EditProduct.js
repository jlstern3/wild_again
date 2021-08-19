import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from './ProductForm';

const EditProduct = (props) => {
    const { id } = props;
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(e);
        axios.put("http://localhost:8000/api/products/" + id, product)
            .then((res) => {
                if (res.data.errors) {
                    setErrors(res.data.errors)
                }
                else {
                    navigate('api/products/' + id)
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <ProductForm
                product={product}
                setProduct={setProduct}
                errors={errors}
                handleSubmit={handleSubmit}
                submitButtonLabel={"Update Product"} />
            <Link to={"/api/products"}><button>Back to All Products</button></Link>

        </div>
    )
}
export default EditProduct;