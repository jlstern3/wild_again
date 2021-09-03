import React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from 'reactstrap';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


const ProductForm = (props) => {
    const { errors, product, setProduct, handleSubmit, submitButtonLabel } = props;

    const category = [
        'Grocery',
        'Cleaning',
        'Personal Hygiene',
        'Household',
        'Outdoor Systems',
        'Adventure Gear',
        'Clothing',
        'Miscellaneous',
    ];



    // const inputChange = (e) => {
    //     setNewProduct({ ...product, [e.target.name]: e.target.value });
    // }

    // const handlePhoto = (e) => {
    //     setNewProduct({ ...product, photo: e.target.files[0] });
    // }

    const inputChange = (e) => {
        console.log('input name: ' + e.target.name);
        console.log('input value: ' + e.target.value);

        // set new values to the copied object
        let newProductObject = { ...product };
        newProductObject[e.target.name] = e.target.value;
        setProduct(newProductObject);
    }
    // newProductObject.photo = e.target.files[0];
    // newProductObject.photo = e.target.files




    return (
        <div>
            <Link to={'/api/products'}>
                <FontAwesomeIcon icon="chevron-circle-left"></FontAwesomeIcon></Link>

            {/* <form onSubmit={(e) => handleSubmit(e)} encType='multipart/form-data'> */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>
                    <label>Title:</label>
                    {/* {
                        errors.title ?
                            <span className="errors"><Alert color="danger">{errors.title.message}</Alert></span>
                            : null
                    } */}
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={(e) => inputChange(e)} />
                </p>
                <p>
                    <label>Description:</label>
                    {/* {
                        errors.description ?
                            <span className="errors"><Alert color="danger">{errors.description.message}</Alert></span>
                            : null
                    } */}
                    <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={(e) => inputChange(e)} />
                </p>
                <div>
                    <label>Category: </label>
                    {/* {
                        errors.category ?
                            <span className="errors"><Alert color="danger">{errors.category.message}</Alert></span>
                            : null
                    } */}
                    <select
                        name="category"
                        value={product.category}
                        onChange={(e) => inputChange(e)}>
                        {/* blank first option line in dropdown */}
                        <option value=""></option>
                        {
                            category.map((productCategory, index) => (
                                <option value={productCategory} key={index}>{productCategory}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label>Notes: </label>
                    <input
                        name="notes"
                        value={product.notes}
                        onChange={(e) => inputChange(e)}></input>
                </div>
                {/* <div> */}
                {/* <label>Photo: </label>
                    <input
                        type="file"
                        name="photo"
                        accept=".png, .jpg, .jpeg"
                        value={product.photo}
                        onChange={(e) => inputChange(e)}
                    /> */}
                {/* </div> */}
                <Button type="submit" type="contained"><FontAwesomeIcon icon="plus"></FontAwesomeIcon>{submitButtonLabel}</Button>
            </form>
        </div>
    )

}

export default ProductForm;