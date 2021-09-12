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
                    <h3 id="all-products-title">Your Created Products</h3>
                <Link to={'/api/products/new'}  id="add-new-product-btn">
                    <Button type="submit" type="contained">
                        <FontAwesomeIcon icon="plus"></FontAwesomeIcon>Add a New Product</Button></Link>


            {
                products.map((product, index) => {
                    console.log("this is a new product: " + product.title);
                    return (
                        <div key={index}>
                            <ul>

                            
                            <Link to={'/api/products/' + product._id} class="user-made-products"><li class="product">{product.title}</li></Link>
                            </ul>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default AllProducts;