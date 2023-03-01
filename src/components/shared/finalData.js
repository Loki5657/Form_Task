import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { FormControl, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
export const FinalList = (props) => {
  let count = 0
  const [state, setState] = useState()
  const userdata = [' First name',
    'Middle name',
    'Last name',
    'Mobile number',
    'Email',
    'Birthday',
    'Age',
    'Blood_group',
    'Height',
    'Weight',
    'Gender',
    'Marital status',
    'Address line1',
    'City',
    'Address line2',
    'Pincode',
    'State',
    'Country']
  let data = []
  Object.keys(props.state).map((key) => data.push(props.state[key]))

  return (
    <Box >
      <hi className='txtcolor'>Data added Successfully</hi>
        <List className='ml-30' aria-label="mailbox folders">

          {data && data.map((value) => {
            return (
              <>
                <ListItem key={value} disablePadding>
                  <ListItemText className='ml-30' primary={userdata[count++]} />
                  <ListItemText primary={`${value}`} />
                </ListItem>
                <Divider light />
              </>
            );
          })}
        </List>

    </Box>
  )
}
