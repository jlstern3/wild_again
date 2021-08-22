import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from './ProductForm';
import {Button} from '@material-ui/core';
import DeleteProduct from './DeleteProduct';

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

    const afterDeleteHandler = () => {
        navigate ('/api/products');
    }

    return (
        <div>
            <ProductForm
                product={product}
                setProduct={setProduct}
                handleSubmit={handleSubmit}
                submitButtonLabel={"Update Product"} />
            <Link to={"/api/products"}><Button variant="contained" color = "primary">Back to All Products</Button></Link>
            <DeleteProduct
                id={props.id}
                afterDeleteHandler = {afterDeleteHandler}/>
        </div>
    )
}
export default EditProduct;