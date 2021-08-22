import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from './ProductForm';
import {Button} from '@material-ui/core';

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
                navigate('api/products/' + id)
            }
            )
            .catch(err => console.log(err));
    }

    return (
        <div>
            <ProductForm
                product={product}
                setProduct={setProduct}
                handleSubmit={handleSubmit}
                submitButtonLabel={"Update Product"} />
            <Link to={"/api/products"}><Button variant="contained" color = "primary">Back to All Products</Button></Link>
            <Link to={'/api/products'}><Button variant="contained" color="secondary">Delete {product.title}</Button></Link>

        </div>
    )
}
export default EditProduct;