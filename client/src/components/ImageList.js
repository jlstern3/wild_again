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
import { Link } from '@reach/router';


// Material UI Tooltip
import Tooltip from '@material-ui/core/Tooltip';


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
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
    format: {
        boxShadow: 'none!important',
        border: 'none!important',
    },
    // arrow: {
    //     color: theme.palette.common.black,
    // },
}));

const itemData = [
    {
        img: whitelotus,
        title: "White Lotus Farms",
        website: "https://whitelotusfarms.com/",
        desc: "Organic, lovingly made local food and self care products."
    },
    {
        img: beejoyful,
        title: "Bee Joyful Shop",
        website: "https://beejoyfulshop.com/",
        desc: "Your one-stop-shop for reusable, plastic-free, zero-waste products."
    },
    {
        img: argus,
        title: "Argus Farm Stop",
        website: "https://www.argusfarmstop.com/",
        desc: "Growing the local food economy by selling produce, meats and other artisan products from Michigan producers."
    },
    {
        img: rtr,
        title: "Raise the Root",
        website: "https://www.raisetherootonline.com/",
        desc: "Vibrant, aromatic, organic herbs and veggies grown with love and care for you and the Earth."
    },
    {
        img: bythepound,
        title: "By The Pound",
        website: "https://www.facebook.com/bythelb/",
        desc: "Bulk food store offering everything from tea to exotic candies."
    },
    {
        img: byoc,
        title: 'BYOC Co.',
        website: 'https://www.byocco.com/',
        desc: "Refill your own containers with eco-friendly, ethically produced clearning and personal care products."
    },
    {
        img: homeandgarden,
        title: "Downtown Home and Garden",
        website: "http://www.downtownhomeandgarden.com/",
        desc: "Over a century of selling quality products for all your landscaping and gardening needs."
    },
    {
        img: pfc,
        title: "People's Food Co-op",
        website: "https://peoplesfood.coop/newsite/",
        desc: "Community owned grocery store offering wholesome food, sustainable household/cleaning items, and grab-n-go selections."
    },
    {
        img: aathrift,
        title: "Ann Arbor PTO Thrift Shop",
        website: "https://www.a2ptothriftshop.org/",
        desc: "Local, nonprofit thrift shop supporting Ann Arbor Public Schools."
    },
    {
        img: mailshoppe,
        title: "The Mail Shoppe",
        website: "https://mailshoppe.com/",
        desc: "Pack and ship virtually anything in an eco-friendly way!"
    },
]

export default function TitlebarImageList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList rowHeight={180} className={classes.imageList}>

                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <Link to={'/api/home'} id="img-list-back">
                        <FontAwesomeIcon icon="chevron-circle-left" class="back-icon"></FontAwesomeIcon></Link><ListSubheader component="div" id="ann-arbor">Ann Arbor Resources</ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span><a href={item.website} class="img-list-websites">{item.website}</a></span>}
                            actionIcon={
                            // <Tooltip title={item.desc} placement='top' className={classes.format} arrow>
                            <Tooltip title={item.desc} placement='top' className={classes.format}>
                                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                                    <InfoIcon />                                
                                </IconButton>
                                </Tooltip>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

// export default ImageList;