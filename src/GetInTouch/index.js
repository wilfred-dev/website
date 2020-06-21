import React from "react";
import "./style.css";
import Spacer from "../Spacer";

import discord from "./logos/discord.svg";
import twitter from "./logos/twitter.svg";
import github from "./logos/github.svg";

export default function GetInTouch() {
  return (
    <div className="GetInTouch">
      <Spacer>
        <h2>Get in touch</h2>
        <p>You can reach out to the wilfred devs on multiple channels.</p>
        <ul className="grid">
          <li>
            <img src={discord} alt="discord logo" />
            <h4>Discord</h4>
            <p>Nunc lorem, hendrerit ut risus id, ullamcorper feugiat diam.</p>
            <a href="">Join</a>
          </li>
          <li>
            <img src={twitter} alt="twitter logo" />
            <h4>Twitter</h4>
            <p>Nunc lorem, hendrerit ut risus id, ullamcorper feugiat diam.</p>
            <a href="">Join</a>
          </li>
          <li>
            <img src={github} alt="github logo" />
            <h4>Github</h4>
            <p>Nunc lorem, hendrerit ut risus id, ullamcorper feugiat diam.</p>
            <a href="">Join</a>
          </li>
        </ul>
      </Spacer>
    </div>
  );
}
