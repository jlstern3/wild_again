import React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from 'reactstrap';

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
            {/* <form onSubmit={(e) => handleSubmit(e)} encType='multipart/form-data'> */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>
                    {
                        errors.title ?
                            <span className="errors"><Alert color="danger">{errors.title.message}</Alert></span>
                            : null
                    }
                    <label class="form-label">Title:</label>

                    <input class="form-input"
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={(e) => inputChange(e)} />
                </p>
                <p>
                    {
                        errors.description ?
                            <span className="errors"><Alert color="danger">{errors.description.message}</Alert></span>
                            : null
                    }
                    <label class="form-label">Description:</label>
                    <input class="form-input"
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={(e) => inputChange(e)} />
                </p>
                <p>
                    {
                        errors.category ?
                            <span className="errors"><Alert color="danger">{errors.category.message}</Alert></span>
                            : null
                    }
                    <label class="form-label">Category: </label>

                    <select class="form-input"
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
                </p>
                <p>
                    <label class="form-label">Notes: </label>
                    <input class="form-input"
                        name="notes"
                        value={product.notes}
                        onChange={(e) => inputChange(e)}></input>
                </p>
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