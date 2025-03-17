import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement =() => {
      this.setState({count:this.state.count - 1})
  }
  reset =()=>{
      this.setState({count: 0})
  }

  render() {
    return (
      <>
        <ChildComponent
          countValue={this.state.count}
          incrementFunction={this.increment}
          decrementFunction={this.decrement}
          resetFunction ={this.reset}
        />
      </>
    );
  }
}

export default ParentComponent;
