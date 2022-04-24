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
            An advanced Docker-based CLI tool to manage and create game servers.
          </h4>
          <ButtonGroup>
            <a href="#get-started">
              <Button primary>Get started</Button>
            </a>
            <a href="https://docs.wilfredproject.org/en/latest/">
              <Button secondary>Read documentation</Button>
            </a>
          </ButtonGroup>
        </HeaderCenter>
      </Header>
      <Content>
        <h2>What is Wilfred?</h2>
        <p>
          Wilfred is a command-line interface for running and managing game
          servers locally. It uses Docker to run game servers in containers,
          which means they are completely separated. Wilfred can run any game
          that can run in Docker.
        </p>

        <h4>Highlights</h4>
        <ul>
          <li>Easy to install and few dependencies</li>
          <li>
            An easy-to-use command-line interface for smooth game server
            management.
          </li>
          <li>Secure and isolated containers for each game server</li>
          <li>Works with any game that can run in Docker</li>
          <li>
            Integrates with game configuration files so that you never have to
            manually open and edit files
          </li>
          <li>Works with many games out of the box</li>
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
              <li>Spigot</li>
              <li>SpongeVanilla</li>
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
          Make sure you have Docker installed (see the official documentation
          for more info). The recommended way of installing Wilfred is via{" "}
          <a href="https://brew.sh/">Homebrew</a>. Once brew is installed,
          Wilfred can easily be installed from the official tap.
        </p>
        <pre>
          <code>brew tap wilfred-dev/wilfred</code>
          <code>brew install wilfred</code>
        </pre>
        <p>
          Want the bleeding edge? You can install the latest commit using
          <code>--HEAD</code> (bugs are to be expected, don't use in production
          environments!).
        </p>
        <pre>
          <code>brew tap wilfred-dev/wilfred</code>
          <code>brew install --HEAD wilfred</code>
        </pre>
        <p>
          Wilfred can also be installed using <code>pip</code>. You need to use{" "}
          <strong>Python 3.7</strong> or newer to run Wilfred.
        </p>
        <pre>
          <code>pip install wilfred --upgrade</code>
        </pre>
        <p>
          Once you got Wilfred installed, run <code>wilfred setup</code> to set
          a path for Wilfred to use to store server files.
        </p>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="quickstart"
          alt="console gif guide"
        >
          <source
            className="quickstart"
            src="quickstart.webm"
            type="video/webm"
          />
          <source
            className="quickstart"
            src="quickstart.mp4"
            type="video/mp4"
          />
        </video>
        <p>
          To create your first server, use <code>wilfred create</code>. Most
          values have a default value, where you can just press return to use
          them.
        </p>
        <p>
          Wilfred will ask you which "image" to use. An image is a set of
          configuration files that defines a specific game within Wilfred. These
          images are not to be confused with Docker images, Wilfred images sort
          of wrap around the Docker images. A couple of games are already built
          into Wilfred, but you can also create your own.
        </p>
        <p>
          Then, Wilfred will ask you to set any environment variables (if
          available for that image). The environment variables differ from game
          to game and most of them have a default value.
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
          (it will start the server and then immediately attach to the server
          console).
        </p>
        <p>
          Read more in the{" "}
          <a href="https://docs.wilfredproject.org/en/latest/">documentation</a>
        </p>
      </Content>
      <GetInTouch />
      <Footer />
    </div>
  );
}
