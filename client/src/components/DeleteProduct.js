import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
        <div id="delete-handler">
            <FontAwesomeIcon icon="trash-alt" class="delete-icon" onClick={(e)=>deleteHandler(e,id)}></FontAwesomeIcon>
        </div>
    )
}

export default DeleteProduct;