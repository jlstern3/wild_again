import React, {useState, useEffect} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TabPanel from './TabPanel';
import {Button} from '@material-ui/core';
import { Link, navigate } from '@reach/router';

const HomePage = () => {
    return(
        <div>
            <h1>This is the home page displaying</h1>
            <h3>Placeholder blurb for app -- why it's important to shop locally, reduce waste, etc.</h3>
            <h5>With all this being said, click on a link below to get started on your sustainable living journey!</h5>
            <Button type="contained"><Link to ="/api/products">All Your Products</Link></Button>
            <Button type="contained"><Link to ="/api/products/local">Shop Local</Link></Button>
            <Button type="contained"><Link to ="/api/products/tips">Helpful Tips</Link></Button>

        </div>
    )
}

export default HomePage;