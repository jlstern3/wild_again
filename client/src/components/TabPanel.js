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
            <h2 id="tips-title">Tips & Tricks</h2>

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
                <h3 class="tab-title">Kitchen: </h3>
                <ul>
                    <li>Replace plastic resealable containers with glass containers</li>
                    <li>Replace single-use napkins with washable ones</li>
                    <li>Replace paper towel with washable towels (like bamboo)</li>
                    <li>Use reusable, compostable sponges</li>
                    <li>Replace plastic wrap with beeswax food wrap</li>
                    <li>Cool items before placing them in the fridge/freezer</li>
                    <li>Make sure the sink is turned off when not in active</li>
                    <li>Ensure the fridge/freezer doors are fully shut</li>
                    <li>Use a stainless steal reusable coffee pod in your single-serving coffee maker</li>
                    <li>Test your water and get an appropriate water filter</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <h3 class="tab-title">Food: </h3>
                <ul>
                    <li>Shop local and seasonal -- reduce those food miles and support local farmers</li>
                    <li>Make sure your food is free of chemicals and pesticides</li>
                    <li>Choose fair trade products</li>
                    <li>Use as much of your food as possible -- there are great recipes online for parts of food that don't typically get discarded like banana peels and watermelon rinds</li>
                    <li>Get familiar with what you can compost and be diligent about it</li>
                    <li>Buy in bulk, bring your own containers</li>
                    <li>Always keep some fair trade bags on hand for transporting your purchases</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <h3 class="tab-title">On-the-Go: </h3>
                <ul>
                    <li>Never leave home without your reusable waterbottle</li>
                    <li>Bring a reusable mug to your local coffee shop -- you'll often get a discount on your drink</li>
                    <li>Replace plastic utensils with reusable bamboo or stainless steel ones</li>
                    <li>Replace plastic straws with a stainless steel, dishwasher safe one</li>
                    <li>Ditch single-use plastic bags for machine-washable, stain and water resistant-lined snack bags</li>
                    <li>Always have mesh bags and/or cloth bulk bags on hand, you'll never know when they'll come in handy</li>
                    <li>Opt for a washable hand towel (they make quick-dry ones) instead of a paper napkin</li>
                    <li>Pack your own food -- takeout creates a lot of wasted packaging and products</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <h3 class="tab-title">Laundry: </h3>
                <ul>
                    <li>Replace dryer sheets with natural wool dryer balls</li>
                    <li>Only run full loads of laundry</li>
                    <li>Hang dry when possible</li>
                    <li>Wear your clothes and use towels multiple times before washing</li>
                    <li>They make laundry detergent in strips now: hypoallergenic, eco-friendly, liquidless, compostable packaging</li>
                    <li>If you can't find the strips. opt for solid or powdered detergents free from parabens, phosphates, formaledhyde, and other toxic chemicals</li>
                    <li>Don't overuse your detergent -- double check to see recommended measurements</li>
                </ul>
                
            </TabPanel>
            <TabPanel value={value} index={4}>
            <h3 class="tab-title">Cleaning: </h3>
                <ul>
                    <li>Stock up on the following ingredients: white vinegar, baking soda, borax, hydrogen peroxide, lemon juice, liquid castile soap, corn meal, olive oil, ethically-produced essential oils</li>
                    <li>Do a quick Google search of the above ingredients for quick DIY cleaners for all parts of your house</li>
                    <li>No need for single-use wipes or expensive chemicals (or any toxic chemicals, for that matter)</li>
                    <li>Choose a mop that uses towels as mophead -- throw the towels in the wash and call it a day</li>
                    <li>Stock your house with bars of soap instead of plastic pump bottles</li>
                </ul>
                
            </TabPanel>
            <TabPanel value={value} index={5}>
            <h3 class="tab-title">Personal Care: </h3>
                <ul>
                    <li>For menstruation, use a menstrual and/or washable period panties</li>
                    <li>Avoid chemicals commonly found in personal care products: phthalates, sulfates, parabens, and more (it's worth a quick Google!)</li>
                    <li>Opt for an eco-friendly, pesticide-free bamboo toothbrush and makeup brushes</li>
                    <li>Reduce packaging by buying in bulk</li>
                    <li>Choose products lie chapstick and moisturizers in all-natural, compostable pacakging</li>
                    <li>Ditch single-use razors for an electric one -- but who says you have to shave?</li>
                    <li>Instead of packaged face masks with harsh ingredients, make your own natural ones</li>
                    <li>Avoid aromatherapy candles made of paraffin and check what your incense are made of</li>
                </ul>
                
            </TabPanel>
            <TabPanel value={value} index={6}>
            <h3 class="tab-title">Clothing: </h3>
                <ul>
                    <li>Buy second hand, or "pre-loved"</li>
                    <li>Always buy sweatshop free, fair trade clothing</li>
                    <li>Opt for natural fibers</li>
                    <li>Host a clothing swap with your friends/family</li>
                    <li>Donate, donate, donate</li>
                    <li>Try upcycling your favorite tee into a crop top to give it a second life (great for jeans to shorts too!)</li>
                    <li>Before giving up on a hole-y garment, try sewing it yourself first</li>
                    <li>Reduce dry cleaning</li>
                </ul>
            
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
                    <Tab label="Kitchen" {...a11yProps(0)} />
                    <Tab label="Food" {...a11yProps(1)} />
                    <Tab label="On-the-Go" {...a11yProps(2)} />
                    <Tab label="Laundry" {...a11yProps(3)} />
                    <Tab label="Cleaning" {...a11yProps(4)} />
                    <Tab label="Personal Care" {...a11yProps(5)} />
                    <Tab label="Clothing" {...a11yProps(6)} />
                </Tabs>
            </AppBar>

        </div>
    );
}

