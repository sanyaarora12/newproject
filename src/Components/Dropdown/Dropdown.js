import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown({
  handleChange,
  options,
  item,
  selectedValue,
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Select any of the following
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="please select any of the following"
          onChange={(e) => handleChange(e)}
          value={selectedValue}
        >
          {options.map((ele) => {
            return <MenuItem value={ele.title}>{ele.title}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

// import React, { useState } from "react";

// export default function Dropdown({title}) {
//   const getInitialState = () => {
//     const value = {title};
//     return value;
//   };

//   const [value, setValue] = useState(getInitialState);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <div>
//       <select value={value} onChange={handleChange}>
//         <option value={title}>{title}</option>

//       </select>

//     </div>
//   );
// }
