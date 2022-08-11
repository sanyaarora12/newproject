import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Popup from "./Popup";
import Task from "./Task";
import New from "./New";

export default function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Task />} />
          <Route exact path="/popup" element={<Popup/>} />
          <Route exact path="/form" element={<Form/>} />
          <Route exact path="/1" element={<New/>} />
        </Routes>
      </Router>
    </div>
  );
}
