import React, { useState } from "react";

export default function Dropdown({ title }) {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <select title={title} onChange={handleChange}>
       
      </select>

      {/* <p>{` ${value}`}</p> */}
    </div>
  );
}
