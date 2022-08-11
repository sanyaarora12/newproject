import React, { useState } from "react";

export default function App({ title }) {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <select value={value} onChange={handleChange}>
        <option value={title}>{title}</option>
      </select>

      {/* <p>{` ${value}`}</p> */}
    </div>
  );
}
