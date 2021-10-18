import React from 'react'
import {Paper, Typography, StepLabel, Step, Stepper} from "@material-ui/core"
import useStyles from "./styles"
import { useState } from 'react'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Review from './Review'

const Checkout = () =>{
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Dirección de Envío","Método de pago","Resumen de Compra"]

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Form = () => activeStep === 0 ? <AddressForm /> : (activeStep === 1 ? <PaymentForm /> : <Review />)
  //const Form = () => activeStep === 0 ? <AddressForm /> :  <PaymentForm />

  return(
    <>
      <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component='h1' variant='h4' align='center'>
              Proceso de Compra
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(step => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Form />
          </Paper>
          
      </main>
    </>
  )
}

export default Checkout