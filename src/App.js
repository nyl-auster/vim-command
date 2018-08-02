import React, { Component } from "react";
import commands from "./commands";
import Header from "./components/Header";
import ForkMe from "./components/ForkMe";
import Footer from "./components/Footer";
import CommandsWithSearch from "./components/CommandsWithSearch";
import Container from "./components/Container";
import "./typography.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ForkMe
          url={"https://github.com/nyl-auster/vim-interactive-cheat-sheet"}
        />
        <Header />
        <Container>
          <div style={{ textAlign: "center" }}>
            <em>search within {commands.length} useful vim commands </em> 🤗
          </div>
          <CommandsWithSearch />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
