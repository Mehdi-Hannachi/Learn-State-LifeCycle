import React from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import NavBar from "./Components/Navbar/NavBar";
import { Button } from "react-bootstrap";
import Pub from "./Components/Pub/Pub";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  setShow = () =>
    this.setState({
      show: !this.state.show,
    });

  render() {
    return (
      <div>
        <NavBar />
        <div className="mycounter">
          <Button variant="secondary" size="lg" onClick={this.setShow} block>
            {this.state.show ? "Hide Counter" : "Show Counter"}
          </Button>

          {/* { this.state.show && <Counter />} */}

          {this.state.show ? <Counter /> : <Pub />}
        </div>
      </div>
    );
  }
}

export default App;
