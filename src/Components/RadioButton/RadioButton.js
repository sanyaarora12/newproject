// import * as React from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

// export default function RadioButton({ title, handleChange }) {
//   return (
//     <FormControl>
//       <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel
//           value={title}
//           control={<Radio />}
//           onChange={handleChange}
//         />
         
//       </RadioGroup>
//     </FormControl>
//   );
// }

import React from 'react'

export default function RadioButton({title,handleChange}) {
  return (
    <div>
      
<div class="form-check">
  <input className="form-check-input" onChange={handleChange} type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
   {title}
  </label>
</div>
    </div>
  )
}

