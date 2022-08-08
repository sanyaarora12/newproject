import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Task from "./Task";


export default function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Task />} />
        </Routes>
      </Router>
    </div>
  );
}
