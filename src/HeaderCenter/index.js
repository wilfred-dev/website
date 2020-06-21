import React from "react";
import "./style.css";
import Navbar from "../Navbar";
import Spacer from "../Spacer";

export default function HeaderCenter({ children }) {
  return (
    <div className="HeaderCenter">
      <div className="inner">{children}</div>
    </div>
  );
}
