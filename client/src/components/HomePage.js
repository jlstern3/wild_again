import React from 'react'; 
import {Button} from '@material-ui/core';
import { Link } from '@reach/router';

const HomePage = () => {
    return(
        <div class="white-bg">
            <h1 id="conscious-consumer">Be a conscious consumer.</h1>
            <div>
            <h3 class="home-pg-subtitle">Your decisions impact yourself, your community and the Earth.</h3>
            <p class="home-pg-subtitle">Live more sustainably by reducing waste and choosing reusable, plastic-free, ethically-produced products.  Show your local businesses some love!</p>
            </div>
            <h5 id="click-home-pg-btns">Click on a button below to get started on your more sustainable living journey!</h5>
            <div class="home-pg-btns">
            <Button type="contained"><Link to ="/api/products">All Your Products</Link></Button>
            <Button type="contained"><Link to ="/api/products/local">Shop Local</Link></Button>
            <Button type="contained"><Link to ="/api/products/tips">Helpful Tips</Link></Button>
            </div>
        </div>
    )
}

export default HomePage;