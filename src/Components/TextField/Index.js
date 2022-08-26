import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Inputs(handleChange,key) {
  return (
    
      <TextField
       id="outlined-basic"
       variant="outlined"
       onChange={(e) => handleChange(e, key)}
      />

  );
}
