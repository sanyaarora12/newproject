import React from "react";
import "./Popup.css";
import { Link } from "react-router-dom";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {/* <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button> */}
        {props.children}
        <h5>Form submitted successfully</h5>

        <button className="btn1">
          <Link to="/">Go to home</Link>
        </button>
       
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
