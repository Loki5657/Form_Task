import React from "react";
import { TextField } from '@mui/material';


const Input = (props) => {
    const { ...rest } = props;
    return (
        <TextField
            {...rest}
            autoComplete="off"
        />
    )
}


export default Input;