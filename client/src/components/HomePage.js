import React from 'react'; 
import {Button} from '@material-ui/core';
import { Link } from '@reach/router';

const HomePage = () => {
    return(
        <div>
            <h1>This is the home page displaying</h1>
            <h3>Your decisions impacts our planet. Placeholder blurb for app -- why it's important to shop locally, reduce waste, etc.</h3>
            <h5>With all this being said, click on a link below to get started on your sustainable living journey!</h5>
            <div class="home-pg-btns">
            <Button type="contained"><Link to ="/api/products">All Your Products</Link></Button>
            <Button type="contained"><Link to ="/api/products/local">Shop Local</Link></Button>
            <Button type="contained"><Link to ="/api/products/tips">Helpful Tips</Link></Button>
            </div>
        </div>
    )
}

export default HomePage;