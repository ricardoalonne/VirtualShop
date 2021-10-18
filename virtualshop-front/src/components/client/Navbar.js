import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../helpers/StateProvider';
import StorefrontIcon from '@mui/icons-material/Storefront';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "5rem",
  },
  appBar:{
    background: "green",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow:{
    flexGrow:1,
  },
  title: {
    flexGrow: 1,
  },
  button:{
    marginLeft:theme.spacing(2),
  },
  image:{
    marginRight: "10px"
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/*
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          */}
           <Link to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <IconButton aria-label="home">
              <StorefrontIcon style={{ color: "white", opacity:"0.8" }}/>
            </IconButton>
           
          </Link>
          <Typography
            variant="h6"
            marginLeft="2rem"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Virtual Shop
          </Typography>

          <div className={classes.grow}></div>
          
          <div className={classes.button}>
            <Link to="checkout-page">
              <IconButton aria-label="add to cart">
                  <Badge badgeContent={basket?.length} color="secondary">
                      <ShoppingCart fontSize="large" style={{ color: "white", opacity:"0.8" }} />
                  </Badge>
              </IconButton>
            </Link>
            
            {/* <Button color="inherit">Iniciar Sesión</Button> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
