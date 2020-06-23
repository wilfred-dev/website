import React from "react";
import "./style.css";
import Spacer from "../Spacer";

export default function Content({ children }) {
  return (
    <div className="Content">
      <Spacer>{children}</Spacer>
    </div>
  );
}
