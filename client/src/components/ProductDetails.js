import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteProduct from './DeleteProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductDetails = (props) => {
    const { id } = props;
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => { console.log(err) });
    }, [id]);

    const afterDeleteHandler = () => {
        navigate('/api/products');
    }

    return (
        <div>
            <h3 id="product-details-title">Product Details</h3>
            <h5 class="product-details">Title: <span class="product-details-input">{product.title}</span></h5>
            <h5 class="product-details">Description: <span class="product-details-input">{product.description}</span></h5>
            <h5 class="product-details">Category: <span class="product-details-input">{product.category}</span></h5>
            <h5 class="product-details">Notes: <span class="product-details-input">{product.notes}</span></h5>
            <Link to={'/api/products'}>
                <FontAwesomeIcon icon="chevron-circle-left" class="back-icon"></FontAwesomeIcon></Link>
            <Link to={'/api/products/' + props.id + '/edit'}><FontAwesomeIcon icon="edit" class="edit-icon"></FontAwesomeIcon></Link>
            <DeleteProduct
                id={props.id}
                afterDeleteHandler={afterDeleteHandler} />
        </div>
    )
}

export default ProductDetails;