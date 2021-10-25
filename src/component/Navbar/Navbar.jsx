import React from 'react'
import { AppBar, Badge, IconButton, Typography, Menu, MenuItem, Toolbar } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';




const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const Location = useLocation();

    return (
        <>
          <AppBar position="fixed" className={classes.appbar} color="inherit">
              <Toolbar>
                  <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                      <img src={logo} alt="commerce.js" height="25px" className={classes.image} />
                      ጉሊት
                  </Typography>
                  <div className={classes.grow} />
                  {Location.pathname === "/" && 
                  <div className={classes.button}>
                      <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                          <Badge badgeContent={totalItems} color="secondary">
                              <ShoppingCart />
                          </Badge>
                      </IconButton>
                  </div>
                    }
              </Toolbar>
          </AppBar>
        </>
    )
}

export default Navbar
