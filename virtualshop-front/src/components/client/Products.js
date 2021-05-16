import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import {useState, useEffect} from 'react'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0,3,0,3),
  },
}));

export default function Products() {
  const classes = useStyles();

  const urlApi = "http://localhost:5000/api/Product"
  const [data,setData] = useState([])

    const getPetition = async() => {
        await axios.get(urlApi)
        .then(
            response=>{
                setData(response.data)
            }
        ).catch(
            error=>{console.log(error)}
        )
    }

    useEffect(
        ()=> {
            getPetition();
        }
    ,[])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
            data.filter(product => product.stock > 0)
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
