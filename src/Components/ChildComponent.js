import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
      const {
        countValue,
        incrementFunction,
        decrementFunction,
        resetFunction,
      } = this.props;
    return (
      <>
        <h1>Count value : {countValue} </h1>

        <button onClick={incrementFunction}>Increment</button>
        <button onClick={decrementFunction}>Decrement</button>
        <button onClick={resetFunction}>Reset</button>
      </>
    );
  }
}

export default ChildComponent;
