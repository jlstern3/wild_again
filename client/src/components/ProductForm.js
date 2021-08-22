import React from 'react';
import {Button} from '@material-ui/core';

const ProductForm = (props) => {
    const {product, setProduct, handleSubmit, submitButtonLabel} = props;

    const inputChange = (e) => {
        console.log('input name: ' + e.target.name);
        console.log('input value: ' + e.target.value);

// create copy of product object
        let newProductObject = {...product};
// set new values to the copied object
        newProductObject[e.target.name] = e.target.value;
        setProduct(newProductObject);
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>
                    <label>Title:</label>
                    <input 
                    type = "text" 
                    name= "title"
                    value = {product.title}
                    onChange = {(e) => inputChange(e)} />
                </p>
                <p>
                    <label>Description:</label>
                    <input 
                    type = "text" 
                        name= "description"
                        value = {product.description}
                        onChange = {(e) => inputChange(e)} />
                </p>
                <Button type = "submit" type="contained">{submitButtonLabel}</Button>
            </form>
        </div>
    )

}

export default ProductForm;