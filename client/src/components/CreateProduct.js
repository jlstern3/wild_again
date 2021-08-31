import React, {useState} from 'react';
import ProductForm from './ProductForm';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const CreateProduct = (props) => {
    const[errors, setErrors] = useState({});

    const[product, setProduct] = useState({
        "title": "",
        "description": "",
        "category": "",
    });

    // const category = [
    //     'Grocery', 
    //     'Cleaning', 
    //     'Personal Hygiene',
    //     'Household',
    //     'Outdoor Systems',
    //     'Adventure Gear',
    //     'Clothing',
    //     'Miscellaneous',
    // ];



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', product)
            .then((res) => {
                console.log(res.data);
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    setProduct(res);
                    navigate('/api/products');
                }
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
                errors={errors}
                handleSubmit = {handleSubmit}
                submitButtonLabel = {"Create Product"}
            />
        </div>
    )
}

export default CreateProduct;