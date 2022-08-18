import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function Checkboxes({ title, handleChange, value }) {
  return (
    <div>
      <Checkbox name={title} onChange={handleChange} value={title} />
      {title}
    </div>
  );
}