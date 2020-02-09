import React from "react";
import "./App.css";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0px;
`;

const Text = styled.p`
  margin: 0px;
`;

const IconContainer = styled.div`
  padding-top: 0.25rem;
`;

const Icon = styled.a`
  margin: 0.25rem;
  font-size: 1.5rem;
  color: white;
  display: inline;
  svg {
    cursor: pointer;
  }
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Title>Wilfred</Title>
        <Text>
          <span role="img" aria-label="Squirrel">
            🐿️
          </span>{" "}
          A CLI for managing game servers using Docker.
        </Text>
        <IconContainer>
          <Icon href="https://github.com/wilfred-dev/wilfred" target="_blank">
            <FaGithub />
          </Icon>
          <Icon href="https://docs.wilfredproject.org" target="_blank">
            <FaBook />
          </Icon>
        </IconContainer>
      </Container>
    </div>
  );
}

export default App;
