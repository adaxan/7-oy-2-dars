import React from "react";
import { useNavigate } from "react-router-dom";

function MainLayout({ children }) {
    const navigate = useNavigate()
  return (
    <div>
      <div className="container mx-auto bg-white shadow-xl w-3/4 flex justify-evenly p-5 mb-10">
        <button onClick={() => {navigate("/counter")}} className="btn btn-primary">Counter</button>
        <button onClick={() => {navigate("/form")}} className="btn btn-secondary">Form</button>
        <button onClick={() => {navigate("/photos")}} className="btn btn-accent">Photos</button>
        <button onClick={() => {navigate("/")}} className="btn btn-success">To-Do</button>
      </div>
        <div>{children}</div>
    </div>
  );
}

export default MainLayout;