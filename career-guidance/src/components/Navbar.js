import React from 'react';
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: 'none',
    padding: '10px 50px',
  },
  brand: {
    flexGrow: 1,
    fontFamily: 'serif',
    fontWeight: 700,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    marginRight: '20px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  button: {
    borderRadius: '20px',
    marginRight: '10px',
    padding: '5px 20px',
    textTransform: 'none',
  },
  signupButton: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '20px',
    padding: '5px 20px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#333',
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6" className={classes.brand}>
          The Guide
        </Typography>
        
        <Link to="/" className={classes.link}>
          Home
        </Link>

        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          className={classes.link}
          onClick={handleMenuClick}
        >
          Career options
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
        </Menu>

        <Link to="/schedule" className={classes.link}>
          Schedule a meet
        </Link>

        <Button variant="outlined" className={classes.button}>
          Login
        </Button>

        <Button variant="contained" className={classes.signupButton}>
          Sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;