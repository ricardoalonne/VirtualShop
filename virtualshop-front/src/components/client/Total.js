import React from 'react';
import accounting from 'accounting';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { useStateValue } from '../../helpers/StateProvider';
import { getBasketTotal } from '../../helpers/reducer';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        height:"20vh"
    },
    button:{
        marginTop:"2rem",
    }
}))


const Total = () => {
    const classes = useStyles()
    const [{basket}, dispatch] = useStateValue();

    console.log(basket, 'total - basket')
    return(
        <div className={classes.root}>
             <Typography component='h3' align='center'>
                Total de productos:
                <b marginLeft='1rem'>{basket?.length}</b>
            </Typography>
            <Link to="checkout" style={{ textDecoration: 'none' }}>
                <Button className={classes.button} variant="contained" color="primary">
                    <Typography component='p' align='center'>
                        Ir a Pagar 
                        <b marginLeft='1rem'>{accounting.formatMoney(getBasketTotal(basket),"S/.")}</b>
                    </Typography>
                </Button>
            </Link>
            
        </div>
    )
}

export default Total