import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (

            <div
                role="tabpanel"
                hidden={value !== index}
                id={`scrollable-auto-tabpanel-${index}`}
                aria-labelledby={`scrollable-auto-tab-${index}`}
                {...other}
            >
                            <Link to={'/api/home'}>
            
            <FontAwesomeIcon icon="chevron-circle-left" class="back-icon"></FontAwesomeIcon></Link>
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>

    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <TabPanel value={value} index={0}>
                <h3>General Tips for Household Items: </h3>
                <ul>
                    <li>Glass tupperware containers</li>
                    <li>Washable napkins</li>
                    <li>Reusable bamboo paper towel</li>
                    <li>Compostable sponges</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ul>
                    <li>1:1 vinegar:water cleaning spray</li>
                    <li>Baking soda</li>
                    <li>Mop that uses towels as mophead</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Examples of Laundry
            </TabPanel>
            <TabPanel value={value} index={3}>
                Examples of Home System Designs
            </TabPanel>
            <TabPanel value={value} index={4}>
                Examples of Personal Hygiene
            </TabPanel>
            <TabPanel value={value} index={5}>
                Examples of Clothing
            </TabPanel>
            <TabPanel value={value} index={6}>
                Examples of Outdoor Gear
            </TabPanel>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Household Items" {...a11yProps(0)} />
                    <Tab label="Cleaning Products" {...a11yProps(1)} />
                    <Tab label="Laundry" {...a11yProps(2)} />
                    <Tab label="Home System Designs" {...a11yProps(3)} />
                    <Tab label="Personal Hygiene" {...a11yProps(4)} />
                    <Tab label="Clothing" {...a11yProps(5)} />
                    <Tab label="Outdoor Gear" {...a11yProps(6)} />
                </Tabs>
            </AppBar>

        </div>
    );
}

