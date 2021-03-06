import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from './ProductForm';
import DeleteProduct from './DeleteProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const EditProduct = (props) => {
    const { id } = props;
    const [product, setProduct] = useState({});
    const [errors, setErrors] = useState({});

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
                    navigate('/api/products/' + id)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const afterDeleteHandler = () => {
        navigate('/api/products');
    }

    return (
        <div class="white-bg">
            <Link to={"/api/products"}><FontAwesomeIcon icon="chevron-circle-left" class="back-icon" /></Link>
            <h3 id="edit-title">Edit Product</h3>
            <ProductForm
                product={product}
                setProduct={setProduct}
                handleSubmit={handleSubmit}
                errors = {errors}
                submitButtonLabel={"Update Product"} />
                
            <DeleteProduct
                id={props.id}
                afterDeleteHandler={afterDeleteHandler} />

        </div>
    )
}
export default EditProduct;