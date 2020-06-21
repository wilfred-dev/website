import React from "react";
import "./style.css";

import logo from "./logo.svg";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <img src={logo} />
      <ul>
        <li>
          <a href="/docs">Documentation</a>
        </li>
      </ul>
    </nav>
  );
}
