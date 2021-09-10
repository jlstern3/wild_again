import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import whitelotus from '../img/WhiteLotus.jpg';
import bythepound from '../img/ByThePound.jpg';
import rtr from '../img/RaiseTheRoot.jpg';
import pfc from '../img/Co-op.jpg';
import beejoyful from '../img/BeeJoyful.jpg';
import argus from '../img/Argus.jpg';
import homeandgarden from '../img/Downtown-Home-Garden.jpg';
import byoc from '../img/BYOC.jpg';
import aathrift from '../img/AAThrift.jpg';
import mailshoppe from '../img/MailShoppe.jpg';
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
        img: whitelotus,
        title: "White Lotus Farms",
        website: "https://whitelotusfarms.com/",
    },
    {
        img: beejoyful,
        title: "Bee Joyful Shop",
        website: "https://beejoyfulshop.com/",
    }, 
    {
        img: argus,
        title: "Argus Farm Stop",
        website: "https://www.argusfarmstop.com/",
    },
    {
        img: rtr,
        title: "Raise the Root",
        website: "https://www.raisetherootonline.com/",
    },
    {
        img: bythepound,
        title: "By The Pound",
        website: "https://www.facebook.com/bythelb/",
    },
    {
        img: byoc,
        title: 'BYOC Co.',
        website: 'https://www.byocco.com/',
    },
    {
        img: homeandgarden,
        title: "Downtown Home and Garden",
        website: "http://www.downtownhomeandgarden.com/",
    },
    {
        img: pfc,
        title: "People's Food Co-op",
        website: "https://peoplesfood.coop/newsite/",
    },
    {
        img: aathrift,
        title: "Ann Arbor PTO Thrift Shop",
        website: "https://www.a2ptothriftshop.org/",
    },
    {
        img: mailshoppe,
        title: "The Mail Shoppe",
        website: "https://mailshoppe.com/",
    },
]

export default function TitlebarImageList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to={'/api/home'}>
                <FontAwesomeIcon icon="chevron-circle-left" class="back-icon"></FontAwesomeIcon></Link>            
            <ImageList rowHeight={180} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div" id="ann-arbor">Ann Arbor Resources</ListSubheader>
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