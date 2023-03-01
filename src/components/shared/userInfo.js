import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from './Input';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import Dropdown from './dropdown';

const UserInfo = (props) => {
    const ref = useRef()

    const [userDetails, setuserDetails] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        mobile_number: "",
        email: "",
        birthday: "",
        age: "",
        blood_group: "",
        height: "",
        weight: "",
        gender: "",
        marital_status: "",
        errors: {
            first_name: "",
            middle_name: "",
            last_name: "",
            mobile_number: "",
            email: "",
            birthday: "",
            age: "",
            blood_group: "",
            height: "",
            weight: "",
            gender: "",
            marital_status: "",
        },

    });
    //onchange input values
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        props.state[name] = value;
        props.state.errors[name] = "";
        setuserDetails({ ...userDetails });
    };

    //accept only numbers
    const allowOnlyNumbers = (evt) => {
        var charCode = (evt.which) ? evt.which : KeyboardEvent.code;
        console.log(charCode)
        if (charCode > 31 && (charCode < 46 || charCode > 57))
            evt.preventDefault()
        return true;
    };
    return (
        <Box >
            <FormControl>
                <Grid container >
                    <Grid md={6} >
                        <Input
                            error={props.state.errors.first_name}
                            className='input'
                            type={"text"}
                            name="first_name"
                            value={props.state.first_name}
                            placeholder="First name"
                            onChange={handleInputChange}
                            helperText={props.state.errors.first_name}
                        />
                        <Input
                            error={props.state.errors.last_name}
                            className='input'
                            type={"text"}
                            name="last_name"
                            value={props.state.last_name}
                            placeholder="Last name"
                            onChange={handleInputChange}
                            helperText={props.state.errors.last_name}
                        />
                        <Input
                            error={props.state.errors.email}
                            className='input'
                            type={"text"}
                            name="email"
                            value={props.state.email}
                            placeholder="Email "
                            onChange={handleInputChange}
                            helperText={props.state.errors.email}


                        />
                        <Input
                            error={props.state.errors.age}
                            className='input'
                            type={"text"}
                            name="age"
                            value={props.state.age}
                            placeholder="Age"
                            onChange={handleInputChange}
                            helperText={props.state.errors.age}
                            onKeyPress={allowOnlyNumbers}

                        />
                        <Input
                            error={props.state.errors.height}
                            className='input'
                            type={"text"}
                            name="height"
                            value={props.state.height}
                            placeholder="Height"
                            onChange={handleInputChange}
                            helperText={props.state.errors.height}
                            onKeyPress={allowOnlyNumbers}


                        />

                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            onChange={handleInputChange}
                            name='gender'
                        >
                            <Typography className='text'>Gender</Typography>
                            <FormControlLabel name='gender' value="female" control={<Radio />} label="Female" />
                            <FormControlLabel name='gender' value="male" control={<Radio />} label="Male" />
                            <FormControlLabel name='gender' value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        {
                            props.state.errors.gender &&
                            <FormHelperText className='ml-20'>{props.state.errors.gender}</FormHelperText>
                        }

                    </Grid>

                    <Grid md={6} >
                        <Input
                            error={props.state.errors.middle_name}
                            helperText={props.state.errors.middle_name}
                            type="text"
                            name="middle_name"
                            className='input'
                            value={props.state.middle_name}
                            placeholder="Middle name"
                            onChange={handleInputChange}
                        />
                        <Input
                            error={props.state.errors.mobile_number}
                            helperText={props.state.errors.mobile_number}


                            type="text"
                            name="mobile_number"
                            className='input'
                            value={props.state.mobile_number}
                            placeholder="Mobile number"
                            onChange={handleInputChange}
                            onKeyPress={allowOnlyNumbers}
                        />
                        <div >
                            <Input
                                hidden
                                ref={ref}
                                error={props.state.errors.birthday}
                                helperText={props.state.errors.birthday}
                                type='date'
                                name="birthday"
                                className='input'
                                value={props.state.birthday}
                                placeholder="Birthday"
                                onChange={handleInputChange}
                            />
                        </div>
                        <Dropdown

                            data={[
                                {
                                    value: 'O+',
                                    label: `O+`,
                                },
                                {
                                    value: 'O-',
                                    label: `O-`,
                                },
                                {
                                    value: 'AB-',
                                    label: `Ab-`,
                                },

                            ]}
                            className='input  dropdown'
                            name="blood_group"
                            placeholder="Blood group"
                            type="text"
                            value={props.state.blood_group}
                            error={props.state.errors.blood_group}
                            onChange={handleInputChange} />
                        {
                            props.state.errors.blood_group &&
                            <FormHelperText className='ml-20'>{props.state.errors.blood_group}</FormHelperText>
                        }
                        <Input
                            error={props.state.errors.weight}
                            helperText={props.state.errors.weight}
                            type="text"
                            name="weight"
                            className='input'
                            value={props.state.weight}
                            placeholder="Weight"
                            onChange={handleInputChange}

                        />
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            onChange={handleInputChange}
                            name='marital_status'
                        >
                            <Typography className='text'>Marital status</Typography>
                            <FormControlLabel name='marital_status' value="Single" control={<Radio />} label="Single" />
                            <FormControlLabel name='marital_status' value="married" control={<Radio />} label="married" />
                            <FormControlLabel name='marital_status' value="Divorced" control={<Radio />} label="Divorced" />
                            <FormControlLabel name='marital_status' value="widowed" control={<Radio />} label="widowed" />

                        </RadioGroup>
                        {
                            props.state.errors.marital_status &&
                            <FormHelperText className='ml-20'>{props.state.errors.marital_status}</FormHelperText>
                        }
                    </Grid>
                </Grid>
            </FormControl>
        </Box>

    );
}
export default UserInfo;