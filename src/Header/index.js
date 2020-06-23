import React from "react";
import "./style.css";
import Navbar from "../Navbar";
import Spacer from "../Spacer";

export default function Header({ children }) {
  return (
    <header className="Header">
      <Spacer>
        <Navbar />
        {children}
      </Spacer>
    </header>
  );
}
