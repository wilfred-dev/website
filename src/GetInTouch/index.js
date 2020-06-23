import React from "react";
import "./style.css";
import Spacer from "../Spacer";

import discord from "./logos/discord.svg";
import discourse from "./logos/discourse.svg";
import github from "./logos/github.svg";

export default function GetInTouch() {
  return (
    <div className="GetInTouch">
      <Spacer>
        <h2>Get in touch</h2>
        <p>You can reach out to the Wilfred devs and community via multiple channels.</p>
        <ul className="grid">
          <li>
            <img src={discord} alt="discord logo" />
            <h4>Discord</h4>
            <p>Discuss development and get help from the community.</p>
            <a href="https://discord.gg/zZhkPK2">Join</a>
          </li>
          <li>
            <img src={discourse} alt="discourse logo" />
            <h4>Discourse</h4>
            <p>Discuss development and get help from the community.</p>
            <p>(Coming soon)</p>
          </li>
          <li>
            <img src={github} alt="github logo" />
            <h4>GitHub</h4>
            <p>Wilfred is open-source and licensed under the simple and permissive MIT License.</p>
            <a href="https://github.com/wilfred-dev">Explore</a>
          </li>
        </ul>
      </Spacer>
    </div>
  );
}
