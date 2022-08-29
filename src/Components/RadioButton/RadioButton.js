import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButton({
  title,
  handleChange,
  options,
  selectedValue,
}) {
  return (
    <FormControl>
      <RadioGroup
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 22,
           
            marginTop: "5px",
            margin: "5px",
          },
        }}
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) => handleChange(e)}
        value={selectedValue}
      >
        {options.map((ele) => {
          return (
            <div
              style={{
                display: "flex",
               
                border: "1px grey solid",
                borderRadius: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                margin: "5px",
                width: "150px"
              }}
            >
              <div>
                <FormControlLabel control={<Radio />} value={ele.title}>
                  {ele.title}
                </FormControlLabel>
              </div>

              <div>
                <FormLabel
                  style={{
                    color: "black",
                    marginTop: "12px",
                    fontSize: 17,
                    marginLeft: "-12px",
                  }}
                  id="demo-radio-buttons-group-label"
                >
                  {ele.title}
                </FormLabel>
              </div>
            </div>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
