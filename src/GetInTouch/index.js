import React from "react";
import "./style.css";
import Spacer from "../Spacer";

import discord from "./logos/discord.svg";
import discourse from "./logos/discourse.svg";
import github from "./logos/github.svg";
import email from "./logos/email.svg";

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
            <a href="https://discord.gg/zZhkPK2">Join</a>
          </li>
          <li>
            <img src={discourse} alt="discourse logo" />
            <h4>Discourse</h4>
            <p>Nunc lorem, hendrerit ut risus id, ullamcorper feugiat diam.</p>
            <p>(Coming soon)</p>
          </li>
          <li>
            <img src={github} alt="github logo" />
            <h4>Github</h4>
            <p>Nunc lorem, hendrerit ut risus id, ullamcorper feugiat diam.</p>
            <a href="https://github.com/wilfred-dev">Explore</a>
          </li>
          <li>
            <img src={email} alt="email logo" />
            <h4>Email</h4>
            <p>Nunc lorem, hendrerit ut risus id, ullamcorper feugiat diam.</p>
            <a href="mailto:info@wilfredproject.org">Send email</a>
          </li>
        </ul>
      </Spacer>
    </div>
  );
}
