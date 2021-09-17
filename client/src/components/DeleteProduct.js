import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';



const DeleteProduct = (props) => {
    const { id, afterDeleteHandler } = props;

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

    const useStyles = makeStyles((theme) => ({
        absolute: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(3),
        },
    }));

    const classes = useStyles();


    return (
        <div id="delete-handler">
            {/* <Tooltip title='Delete' placement='top'>  */}
            <FontAwesomeIcon icon="trash-alt" class="delete-icon" onClick={(e) => deleteHandler(e, id)}></FontAwesomeIcon>
            {/* </Tooltip> */}

        </div>
    )
}

export default DeleteProduct;