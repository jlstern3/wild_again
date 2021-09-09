import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data)
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <Link to={'/api/home'}>
                <FontAwesomeIcon icon="chevron-circle-left" class="back-icon"></FontAwesomeIcon></Link>
            <h3>All Products</h3>
            {
                products.map((product, index) => {
                    console.log("this is a new product: " + product.title);
                    return (
                        <div key={index}>
                            <Link to={'/api/products/' + product._id}><p class="product">{product.title}</p></Link>
                        </div>
                    )
                })
            }
            {/* Button to create new product */}
            <Link to={'/api/products/new'}><Button type="submit" variant="contained" color="primary"><FontAwesomeIcon icon="plus"></FontAwesomeIcon>Create New Product</Button></Link>

        </div>
    )
}

export default AllProducts;