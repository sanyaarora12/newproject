import { TextField } from "@mui/material";
import React, { useState } from "react";

function DatePickers() {
  const [date, setDate] = useState();
 

  return (
    <div>
      <TextField fullWidth type="date" onChange={(e) => setDate(e.target.value)} />
    </div>
  );
}

export default DatePickers;