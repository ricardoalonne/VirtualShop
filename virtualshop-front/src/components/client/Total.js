import React from 'react';
import accounting from 'accounting';
import { Button, makeStyles } from '@material-ui/core';
import { useStateValue } from '../../helpers/StateProvider';
import { getBasketTotal } from '../../helpers/reducer';

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
    const [{basket}, dispatch] = useStateValue()
    return(
        <div className={classes.root}>
            <h5>Total de productos: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket),"S/.")}</h5>
            <Button className={classes.button} variant="contained" color="secondary">Confirmar</Button>
        </div>
    )
}

export default Total