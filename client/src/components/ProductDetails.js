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
            <h3>Product Details</h3>
            <h5>Title: {product.title}</h5>
            <h5>Description: {product.description}</h5>
            <Link to={'/api/products'}>
                <FontAwesomeIcon icon="chevron-circle-left"></FontAwesomeIcon></Link>
            <Link to={'/api/products/' + props.id + '/edit'}><FontAwesomeIcon icon="edit"></FontAwesomeIcon></Link>
            <DeleteProduct
                id={props.id}
                afterDeleteHandler={afterDeleteHandler} />
        </div>
    )
}

export default ProductDetails;