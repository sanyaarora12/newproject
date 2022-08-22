import { TextField } from "@mui/material";
import React, { useState } from "react";

function DatePickers() {
  const [date, setDate] = useState();
 
  console.log(date)
  return (
    <div>
      <TextField fullWidth type="date" value={date} onChange={(e) => setDate(e.target.value)} />
    </div>
  );
}

export default DatePickers;