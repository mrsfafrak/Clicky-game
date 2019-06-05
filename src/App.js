import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import Container from "./Container"
import Row from "./Row"
import Column from "./Column"

function App() {
  return (
    <Wrapper>
      <Title>Clicky Game</Title>
      <Nav></Nav>
      <Card></Card>
    </Wrapper>
  );
}

export default App;
