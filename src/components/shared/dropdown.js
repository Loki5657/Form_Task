import React from "react";
import { MenuItem, Select } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
const Dropdown = (props) => {
    const { value, data, placeholder, icon, label, ...rest } = props
    return (
        <div>
            <FormControl fullWidth>
                {
                    value ? " " :<InputLabel className="ml-30 labletxt" >{placeholder}</InputLabel>
                }
                <Select value={value}{...rest}
                >
                    {/* <MenuItem value="">{placeholder}</MenuItem> */}
                    {
                        data.map((each, index) => {
                            return (
                                <MenuItem value={each.value} key={index}>{each.label}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
            {icon}
        </div>
    )
}

export default Dropdown;
