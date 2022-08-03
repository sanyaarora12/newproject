import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';

export default function Input() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginLeft:"-340px"}}><b>Name</b><sup style={{color:"red"}}>*</sup></FormLabel>
        <br/>
        <TextField
          required
          id="outlined-required"
          
        />
        
      </div>
    </Box>
  );
}
