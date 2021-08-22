import React from 'react';
import axios from 'axios';
import {Button} from '@material-ui/core';

const DeleteProduct = (props) => {
    const {id, afterDeleteHandler} = props;

    const deleteHandler = (e, id) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/products/' + id)
            .then((res) => {
                console.log(res.data);
                afterDeleteHandler(id);
            })
            .catch((err) => {
				console.log(err);
			})
    }
    return(
        <div>
            <Button type="contained" color="secondary" onClick={(e)=>deleteHandler(e,id)}>Delete Product</Button>
        </div>
    )
}

export default DeleteProduct;