import React, { Component } from "react";
//import logo from './logo.svg';
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import Popup from "./components/popup";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    showPopup: false,
  };

  constructor() {
    super();
    console.log("App-constructor");
  }

  togglePopup = () => {
    console.log("before showup " + this.state.showPopup);
    this.setState({
      showPopup: !this.state.showPopup,
    });
    console.log("after showup " + this.state.showPopup);
  };
  componentDidMount() {
    console.log("App-Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    //counters[index].value--;
    counters[index].value !== 0 ? counters[index].value-- : this.togglePopup();
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log("App-Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
        {this.state.showPopup ? (
          <Popup text="Negative count" onClosePopup={this.togglePopup} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
