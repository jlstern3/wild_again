import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from '@reach/router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    //state to set dropdown menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    //opens the menu dropdown to where mouse was clicked
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    //closes the menu dropdown
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#3F6A48' }}>
                <Toolbar>

                    <Typography variant="h6" className={classes.title}><Link to="/api/home" id="app-title">
                        Wild Again
                    </Link></Typography>
                    <div>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}><Link to="/api/home" class="user-made-products">Home</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/api/products/tips" class="user-made-products">Tips & Tricks</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/api/products/local" class="user-made-products">Shop Local</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/api/products" class="user-made-products">Your Products</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/api/products/new" class="user-made-products">Create Product</Link></MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;