import React from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";

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
      <div className="App">
        <button className="visibility-btn" onClick={this.setShow}>
          {this.state.show ? "Hide Counter" : "Show Counter"}
        </button>

        {/* { this.state.show && <Counter />} */}

        {this.state.show ? <Counter /> : <h1>Hidden</h1>}
      </div>
    );
  }
}

export default App;
