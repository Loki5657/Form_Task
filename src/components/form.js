import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import StepperComponent from './shared/stepper';
import Button from './shared/Button';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FormComponent = () => {
   
    return (
        <Box className='formContainer' >
            <Grid className='formlayout' >
                <Grid  >
                    <Item className='stepper'><StepperComponent /></Item>
                </Grid>

            </Grid>
        </Box>
    );
}
export default FormComponent;