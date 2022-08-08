import React, { useState } from "react";



function DatePickers() {

  const [date, setDate] = useState();

  console.log("Date", date);

  return (

    <div>

      <input type="date" onChange={(e) => setDate(e.target.value)} />

    </div>

  );

}

export default DatePickers;