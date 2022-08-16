import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Page404 = () => (
  <div>
    <div className="a">
       <button className="page404">Failed to load promotions</button>
    </div>
    <button className="b"><Link to="/">Return to home</Link></button>
  </div>
);

export default Page404;