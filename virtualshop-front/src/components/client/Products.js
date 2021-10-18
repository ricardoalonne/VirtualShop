import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import {useState, useEffect} from 'react'
import axios from 'axios'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ParkIcon from '@mui/icons-material/Park';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0,3,0,3),
  },
  category:{
    paddingBottom: "2rem"
  }
}));

export default function Products() {
  const classes = useStyles();

  const urlApi = "https://localhost:5001/api/Product";
  
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
    
    const getPetition = async() => {
        await axios.get(urlApi)
        .then(
            response => {
                setData(response.data)
            }
        ).catch(
            error => {console.log(error)}
        )
    }

    useEffect(
      () => {
        getPetition();
      }
    ,[])


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div className={classes.root}>
      <BottomNavigation
        
        value={value}
        onChange={handleChange}
        className={classes.category}
      >
        <BottomNavigationAction
          label="Todas"
          value={0}
          icon={<StorefrontIcon />}
        />
        <BottomNavigationAction
          label="Frutas"
          value={3}
          icon={<GroupWorkIcon />}
        />
        <BottomNavigationAction
          label="Verduras"
          value={2}
          icon={<ParkIcon />}
        />
      </BottomNavigation>

      <Grid container spacing={3}>
        {
          value === 0 
          ? data.filter(product => product.stock > 0)
            .map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Product key={product.id} product={product}/>
                </Grid>
                )
            )
          : data.filter(product => product.stock > 0 && product.idCategory === value)
            .map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Product key={product.id} product={product}/>
                </Grid>
                )
            )
        }
        
      </Grid>
    </div>
  );
}
