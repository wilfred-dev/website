import React from "react";
import "./style.css";

export default function Button({ children, primary }) {
  return (
    <button className={"Button " + (primary ? "primary" : "secondary")}>
      {children}
    </button>
  );
}
