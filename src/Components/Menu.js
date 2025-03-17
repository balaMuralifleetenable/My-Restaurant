import React, { Component } from "react";
import Menulist from "./MenuList";

class Menu extends Component {
  render() {
    return (
      <>
        <div className="Row1">
          <h3>Menu</h3>
          <Menulist
            clickVeg={this.props.clickVeg}
            clickNonVeg={this.props.clickNonVeg}
            clickRest={this.props.clickRest}
          />
        </div>
      </>
    );
  }
}

export default Menu;
