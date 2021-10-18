import { Grid, Typography,Button } from '@material-ui/core';
import React from 'react';
import { useForm, FormProvider} from "react-hook-form"
import AddressInput from "./AddressInput"
import {Link} from "react-router-dom"

const AddressForm = () => {
  const methods = useForm();
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Dirección de Envío 
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data=>{})}>
          <Grid container spacing={3}>
            <AddressInput required name="firstName" label="Primer Nombre"/>
            <AddressInput required name="lastName" label="Apellidos"/>
            <AddressInput required name="address" label="Dirección"/>
            <AddressInput required name="email" label="Email"/>
            <AddressInput required name="city" label="Ciudad"/>
            <AddressInput required name="state" label="Distrito"/>
            <AddressInput required name="province" label="Provincia"/>
            <AddressInput required name="postalCode" label="Código Postal"/>
          </Grid>
          <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem"}}>
            <Button component={Link} to="/checkout-page">Volver</Button>
            <Button type="submit" variant="contained" color="primary">Siguiente</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export default AddressForm
