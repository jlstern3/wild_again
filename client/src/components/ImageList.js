import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image from '../img/AlderleafLogo.jpg';
import umich from '../img/Umich.jpg';
import rtr from '../img/RaiseTheRoot.jpg';
import pfc from '../img/Co-op.jpg';
import argus from '../img/Argus.jpg';
import byoc from '../img/BYOC.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, navigate } from '@reach/router';

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
        img: byoc,
        title: 'BYOC Co.',
        website: 'https://www.byocco.com/',
    },
    {
        img: umich,
        title: "Umich logo",
        website: "Someone who's now rich",
    },
    {
        img: rtr,
        title: "Raise the Root",
        website: "https://www.raisetherootonline.com/",
    },
    {
        img: argus,
        title: "Argus Farm Stop",
        website: "https://www.argusfarmstop.com/",
    },
    {
        img: pfc,
        title: "People's Food Co-op",
        website: "https://peoplesfood.coop/newsite/",
    },


]

export default function TitlebarImageList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to={'/api/home'}>
                <FontAwesomeIcon icon="chevron-circle-left"></FontAwesomeIcon></Link>            
            <ImageList rowHeight={180} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Ann Arbor Resources</ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span><a href={item.website} class="img-list-websites">{item.website}</a></span>}
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