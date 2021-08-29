import React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from 'reactstrap';

const ProductForm = (props) => {
    const { errors, product, setProduct, handleSubmit, submitButtonLabel } = props;

    const inputChange = (e) => {
        console.log('input name: ' + e.target.name);
        console.log('input value: ' + e.target.value);

        // create copy of product object
        let newProductObject = { ...product };
        // set new values to the copied object
        newProductObject[e.target.name] = e.target.value;
        setProduct(newProductObject);
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>
                    <label>Title:</label>
                    {
                        errors.title ?
                            <span className="errors"><Alert color="danger">{errors.title.message}</Alert></span>
                            : null
                    }
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={(e) => inputChange(e)} />
                </p>
                <p>
                    <label>Description:</label>
                    {
                        errors.description ?
                            <span className="errors"><Alert color="danger">{errors.description.message}</Alert></span>
                            : null
                    }
                    <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={(e) => inputChange(e)} />
                </p>
                <Button type="submit" type="contained"><FontAwesomeIcon icon="pen"></FontAwesomeIcon>{submitButtonLabel}</Button>
            </form>
        </div>
    )

}

export default ProductForm;