import React from "react";
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import { ShoppingCart } from 'react-feather';

const useStyles = makeStyles({
    appBar: {
        height: '100px',
        color: 'inherit'
    },
    toolbar: {
        color: '#000',
    },
    img: {
        maxHeight: 100,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    shoppingCart: {
        color: '#FF8787',
    }
});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <img src="/images/logoT.jpg" alt="logo" className={classes.img}/>
                <div className={classes.grow}></div>
                <div>
                    <Button variant="contained">
                        Post
                    </Button>
                    <SvgIcon>
                        <ShoppingCart className={classes.shoppingCart}></ShoppingCart>
                    </SvgIcon>
                </div>
                {/* <div>
                    <span>NTec</span>
                </div>
                <div>
                    <Button variant="contained">Post</Button>
                    <span>img1</span>
                    <span>img2</span>
                </div> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;
