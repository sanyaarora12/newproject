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
