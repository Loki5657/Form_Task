import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from './Input';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import Dropdown from './dropdown';
export const AddressDetials = (props) => {
    const [addressDetails, setaddressDetails] = useState({
        address_line1: "",
        city: "",
        address_line2: "",
        pincode: "",
        state: "",
        city: "",
        country: "",
        errors: {
            address_line1: "",
            city: "",
            address_line2: "",
            pincode: "",
            state: "",
            city: "",
            country: "",
        },

    });
    //onchange input values
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        props.state[name] = value;
        props.state.errors[name] = "";
        setaddressDetails({ ...addressDetails });
    };
    
    return (
        <Box >
            <FormControl>
                <Grid container >
                    <Grid md={6} className='address-container' >
                        <Input
                            error={props.state.errors.address_line1}
                            helperText={props.state.errors.address_line1}
                            className='input'
                            type="text"
                            name="address_line1"
                            value={props.state.address_line1}
                            placeholder="Address line1"
                            onChange={handleInputChange}
                        />
                        <Dropdown
                            data={[
                                {
                                    value: 'Hyderabad',
                                    label: `Hyderabad`,
                                },

                                {
                                    value: 'Bengalur',
                                    label: `Bengalur`,
                                },
                                {
                                    value: 'Kerala',
                                    label: `Kerala`,
                                },

                            ]}
                            className='input dropdown'
                            type="text"
                            name="city"
                            error={props.state.errors.city}
                            value={props.state.city}
                            placeholder="City"
                            onChange={handleInputChange}
                        />
                        {
                            props.state.errors.city &&
                            <FormHelperText className='ml-20'>{props.state.errors.city}</FormHelperText>
                        }
                        <Dropdown
                            data={[
                                {
                                    value: 'India',
                                    label: `India`,
                                },
                                {
                                    value: 'America',
                                    label: `America`,
                                },
                                {
                                    value: 'UK',
                                    label: `Uk`,
                                },

                            ]}
                            className='input dropdown'
                            type="text"
                            name="country"
                            error={props.state.errors.country}
                            value={props.state.country}
                            placeholder="country"
                            onChange={handleInputChange}
                        />
                        {
                            props.state.errors.country &&
                            <FormHelperText className='ml-20'>{props.state.errors.country}</FormHelperText>
                        }

                    </Grid>

                    <Grid md={6} >
                        <Input
                            error={props.state.errors.address_line2}
                            helperText={props.state.errors.address_line2}
                            type="text"
                            className='input'
                            name="address_line2"
                            value={props.state.address_line2}
                            placeholder='Address line2'
                            onChange={handleInputChange}

                        />
                        <Dropdown
                            data={[
                                {
                                    value: 'Telangana',
                                    label: `Telangana`,
                                },
                                {
                                    value: 'Andra pradesh',
                                    label: `Andra pradesh`,
                                },
                                {
                                    value: 'Himachal Pradesh',
                                    label: `Himachal Pradesh`,
                                },


                            ]}
                            className='input dropdown'
                            type="text"
                            name="state"
                            error={props.state.errors.state}

                            value={props.state.state}
                            placeholder="state"
                            onChange={handleInputChange}
                        />
                        {
                            props.state.errors.state &&
                            <FormHelperText className='ml-20'>{props.state.errors.state}</FormHelperText>
                        }
                        <Input
                            error={props.state.errors.pincode}
                            helperText={props.state.errors.pincode}
                            className='input'
                            type="text"
                            name="pincode"
                            value={props.state.pincode}
                            placeholder="Pincode"
                            onChange={handleInputChange}
                        />

                    </Grid>
                </Grid>
            </FormControl>
        </Box>
    )
}
