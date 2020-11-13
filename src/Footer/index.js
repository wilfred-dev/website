import React from "react";
import "./style.css";
import Spacer from "../Spacer";

export default function Footer() {
  return (
    <footer className="Footer">
      <Spacer>
        <h4>Copyright Wilfred Project 2020</h4>
        <a href="mailto:info@wilfredproject.org">info@wilfredproject.org</a>
        <p>
          Website created by <a href="https://alvar.dev">Alvar Lagerlöf</a>
        </p>
      </Spacer>
    </footer>
  );
}
