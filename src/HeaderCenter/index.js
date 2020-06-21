import React from "react";
import "./style.css";

export default function HeaderCenter({ children }) {
  return (
    <div className="HeaderCenter">
      <div className="inner">{children}</div>
    </div>
  );
}
