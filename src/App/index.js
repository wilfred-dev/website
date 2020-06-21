import React from "react";
import "./style.css";

import Header from "../Header";
import HeaderCenter from "../HeaderCenter";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import Content from "../Content";

export default function App() {
  return (
    <div className="App">
      <Header>
        <HeaderCenter>
          <h1>Wilfred</h1>
          <h4>
            An advanced Docker-based CLI tool to manage create and manage
            gameservers.
          </h4>
          <ButtonGroup>
            <Button primary>Get started</Button>
            <Button secondary>Read documentation</Button>
          </ButtonGroup>
        </HeaderCenter>
      </Header>
      <Content>
        <h2>What is wilfred?</h2>
        <p>
          Fusce eros libero, convallis in nisi quis, venenatis tincidunt ligula.
          Nunc ut sodales odio, id lobortis orci. Suspendisse maximus odio eros,
          ac sollicitudin mi tempor eget. Suspendisse elementum, odio in
          pulvinar tristique, justo est vehicula erat, eu tincidunt leo velit.
        </p>

        <h4>Highlights</h4>
        <ul>
          <li>
            Focused API with higher level abstractions for common app use-cases.
          </li>
          <li>Stand up a scalable, secure, stateless service in seconds.</li>
          <li>Loosely coupled features let you use the pieces you need.</li>
          <li>
            Pluggable components let you bring your own logging and monitoring,
            networking, and service mesh.
          </li>
          <li>
            Idiomatic developer experience, supporting common patterns such as
            GitOps, DockerOps, ManualOps.
          </li>
          <li>
            Can be used with common tools and frameworks such as Django, Ruby on
            Rails, Spring, and many more.
          </li>
        </ul>
      </Content>
    </div>
  );
}
