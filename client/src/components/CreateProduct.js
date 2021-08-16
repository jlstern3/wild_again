import React, {useState} from 'react';
import ProductForm from './ProductForm';
import axios from 'axios';
import {navigate} from '@reach/router';

const CreateProduct = (props) => {
    const[product, setProduct] = useState({
        title: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', product)
            .then((res) => {
                console.log(res.data);
                navigate('/api/products');
            })
            .catch((err) => {
                console.log(err);
            })
    }
        
    return(
        <div>
            <h3>Create Product</h3>
            <ProductForm 
                product = {product}
                setProduct = {setProduct}
                handleSubmit = {handleSubmit}
                submitButtonLabel = {"Create Product"}
            />
        </div>
    )
}

export default CreateProduct;