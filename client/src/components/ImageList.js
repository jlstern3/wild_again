import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import itemData from './itemData';
import image from '../img/AlderleafLogo.jpg';
import umich from '../img/Umich.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, navigate} from '@reach/router';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const itemData = [
    {
        img: image,
        title: 'Placeholder Image',
        author: 'Jess',
    },
    {
        img: umich,
        title: "Umich logo",
        author: "Someone who's now rich",
    }
]

export default function TitlebarImageList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                        <Link to={'/api/home'}>
                <FontAwesomeIcon icon="chevron-circle-left"></FontAwesomeIcon></Link>
            <h2>Always Shop Local!</h2>
            <ImageList rowHeight={180} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">December</ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>by: {item.author}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

// export default ImageList;