import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UserInfo from './userInfo';
import { AddressDetials } from './addressDetials';
import { FinalList } from './finalData';
import { isEmailValid } from './utils';

const steps = ['USER INFORMATION', 'ADDRESS DETAILS', 'THANK YOU'];

const StepperComponent = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
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
        address_line1: "",
        city: "",
        address_line2: "",
        pincode: "",
        state: "",
        city: "",
        country: "",

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
            address_line1: "",
            city: "",
            address_line2: "",
            pincode: "",
            state: "",
            city: "",
            country: "",
        },

    });
    
    const { errors } = userDetails;


    const handleNext = (e) => {
        if (activeStep === 0) {
            errors.mobile_number = userDetails.mobile_number ? "" : "Mobile Number is a required field"
            errors.first_name = userDetails.first_name ? "" : 'First name is a required field';
            errors.last_name = userDetails.last_name ? "" : "Last name is a required field";
            errors.middle_name = userDetails.middle_name ? "" : "Middle name is a required field";
            errors.age = userDetails.age ? "" : "Age is a required field";
            errors.blood_group = userDetails.blood_group ? "" : "Blood group is a required field";
            errors.birthday = userDetails.birthday ? "" : "Birthday is a required field";
            errors.height = userDetails.height ? "" : "Height is a required field";
            errors.weight = userDetails.weight ? "" : "Weight is a required field";
            errors.gender = userDetails.gender ? "" : "Please select Gender";
            errors.marital_status = userDetails.marital_status ? "" : "Please select Marutal status";
            errors.email = isEmailValid(userDetails.email) ? "" : 'Email invalid';
            if (!errors.mobile_number && !errors.age && !errors.birthday && !errors.blood_group && !errors.email && !errors.first_name && !errors.gender && !errors.height && !errors.last_name && !errors.marital_status && !errors.middle_name && !errors.weight) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                setuserDetails({ ...userDetails, errors: errors })
            }
        }

        if (activeStep === 1) {
            console.log('1');
            errors.address_line1 = userDetails.address_line1 ? "" : "Address line1 is a required field";
            errors.address_line2 = userDetails.address_line2 ? "" : "Address line2 is a required field";
            errors.city = userDetails.city ? "" : "Please select city";
            errors.country = userDetails.country ? "" : "Please select country";
            errors.state = userDetails.state ? "" : "Please select state";
            errors.pincode = userDetails.pincode ? "" : "Pincode is a required field";
            if (!errors.address_line1 && !errors.address_line2 && !errors.city && !errors.country && !errors.state && !errors.pincode) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                setuserDetails({ ...userDetails, errors: errors })
            }
        }
    };


    return (
        <Box >
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => {
                    return (
                        <Step key={label} >
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <React.Fragment>
                {activeStep == 0 && <UserInfo state={userDetails} />}
                {activeStep == 1 && < AddressDetials state={userDetails} />}
                {activeStep != 0 && activeStep != 1 && <FinalList state={userDetails} />}
                <Box className='buttonContainer' >
                    <Button
                        variant="contained"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box />
                    <Button variant="contained" onClick={handleNext} disabled={activeStep === 3}>
                        Next
                    </Button>
                </Box>
            </React.Fragment>
        </Box >
    );
}
export default StepperComponent;