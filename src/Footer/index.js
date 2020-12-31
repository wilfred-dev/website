import React from "react";
import "./style.css";
import Spacer from "../Spacer";

export default function Footer() {
  return (
    <footer className="Footer">
      <Spacer>
        <h4>
          Copyright © 2020-2021{" "}
          <a href="https://vilhelmprytz.se">Vilhelm Prytz</a>, et al.
        </h4>
        <a href="mailto:info@wilfredproject.org">info@wilfredproject.org</a>
        <p>
          Website created by <a href="https://alvar.dev">Alvar Lagerlöf</a>
        </p>
      </Spacer>
    </footer>
  );
}
