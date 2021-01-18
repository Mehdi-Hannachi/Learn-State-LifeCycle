import React from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import NavBar from "./Components/Navbar/NavBar";
import { Button } from "react-bootstrap";

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

          {this.state.show ? <Counter /> : <h1>Hidden</h1>}
        </div>
      </div>
    );
  }
}

export default App;
