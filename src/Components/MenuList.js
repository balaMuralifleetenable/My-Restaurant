import React, { Component } from "react";

class Menulist extends Component {
  render() {
    return (
      <>
        <div className="menulist">
        <div className="all">
            <h4 onClick={this.props.clickRest}>All</h4>
          </div>
          <br/>
          <div className="menulist1">
            <h4 onClick={this.props.clickVeg}>Veg</h4>
          </div>
          <br />
          <div className="menulist2">
            <h4 onClick={this.props.clickNonVeg}>Non-Veg</h4>
          </div>
          <br />
        </div>
      </>
    );
  }
}

export default Menulist;
