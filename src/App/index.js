import React from "react";
import "./style.css";

import Header from "../Header";
import HeaderCenter from "../HeaderCenter";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import Content from "../Content";
import Footer from "../Footer";
import GetInTouch from "../GetInTouch";

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
            <a href="#get-started">
              <Button primary>Get started</Button>
            </a>
            <a href="https://docs.wilfredproject.org/en/latest/#installation">
              <Button secondary>Read documentation</Button>
            </a>
          </ButtonGroup>
        </HeaderCenter>
      </Header>
      <Content>
        <h2>What is wilfred?</h2>
        <p>
          Wilfred is a command-line interface for running and managing game
          servers locally. It uses Docker to run game servers in containers,
          which means they are completely separated. Wilfred can run any game
          that can run in Docker.
        </p>
        <p>
          ⚠ Wilfred is currently under development and should not be considered
          stable. Features may break or may not be implemented yet. Use with
          caution.
        </p>

        <h4>Highlights</h4>
        <ul>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ul>

        <h2>Supported games</h2>
        <p>
          As long as your server can run in Docker, it can probably run using
          Wilfred (after some tinkering). These are the games supported by
          default. You can submit new games to{" "}
          <a href="https://github.com/wilfred-dev/images">
            wilfred-dev/images.
          </a>
        </p>
        <ul>
          <li>
            Minecraft
            <ul>
              <li>Vanilla Minecarft</li>
              <li>BungeeCoord</li>
              <li>Paper</li>
              <li>Waterfall</li>
              <li>Bedrock</li>
            </ul>
          </li>
          <li>Multi Theft Auto</li>
          <li>
            Voice Servers
            <ul>
              <li>Mumble</li>
            </ul>
          </li>
        </ul>
        <h2 id="get-started">Installation</h2>
        <p>
          Please refer to the{" "}
          <a href="https://docs.wilfredproject.org/en/latest/#installation">
            official documentation
          </a>{" "}
          for further installation instructions and documentation.
        </p>
        <h3>Quickstart</h3>
        <p>
          Make sure you have Docker installed (see official documentation for
          more info). Wilfred can be installed using <code>pip</code>. You need
          to use <strong>Python 3.6</strong> or newer to run Wilfred.
        </p>
        <pre>
          <code>pip install wilfred --upgrade</code>
        </pre>
        <p>
          A <a href="https://snapcraft.io/wilfred">snap</a> package is also in
          the works but currently not considered stable. If you're using macOS
          with <a href="https://brew.sh/">Homebrew</a> or Linux with{" "}
          <a href="https://docs.brew.sh/Homebrew-on-Linux">Linuxbrew</a>, you
          can install Wilfred using the official tap.
        </p>
        <pre>
          <code>brew tap wilfred-dev/wilfred</code>
          <code>brew install wilfred</code>
        </pre>
        <p>
          Once you got Wilfred installed, run <code>wilfred setup</code> to set
          a path for Wilfred to use to store server files.
        </p>
        <img
          className="quickstart"
          alt="console gif guide"
          src="https://raw.githubusercontent.com/wilfred-dev/wilfred/master/docs/quickstart.gif"
        ></img>
        <p>
          To create your first server, use <code>wilfred create</code>. Most
          values have a default value, where you can just press return to use
          them.
        </p>
        <p>
          Wilfred will ask you which "image" to use. An image is a set of
          configuration files that defines a specific game within Wilfred. These
          images are not to be confused with Docker images, Wilfred images sort
          of wrapped around the Docker images. A couple of games are already
          built into Wilfred, but you can also create your own.
        </p>
        <p>
          Then, Wilfred will ask you to set any environment variables (if
          available for that image). The environment variables differ from game
          to game and most of them do have a default value.
        </p>
        <p>
          Once the server is created, you can use <code>wilfred servers</code>{" "}
          to list available servers. To start it, use{" "}
          <code>
            wilfred start {"<"}name{">"}
          </code>
          . To attach to the server console, you can use{" "}
          <code>
            wilfred console {"<"}
            name{">"}
          </code>
          . If you want to start the server and attach to the server console in
          a single command, you can use{" "}
          <code>
            wilfred start {"<"}name{">"} --console
          </code>{" "}
          (it will start the server and then immediately attach to server
          console).
        </p>
        <p>
          Read more in the{" "}
          <a href="https://docs.wilfredproject.org/en/latest/#installation">
            documentation
          </a>
        </p>
      </Content>
      <GetInTouch />
      <Footer />
    </div>
  );
}
