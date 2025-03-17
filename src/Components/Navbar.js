import React, { Component } from 'react';

class NavbarComponent extends Component {
  render() {
    return (
      <>
        <div className="header">
          <h5>My Restaurant</h5>
          <div className="header2">
            <h5>SignUp</h5>
            <h5 style={{ padding: "0 60px" }}>Login</h5>
          </div>
        </div>
        {/*  */}
       
      </>
    );
  }
}

export default NavbarComponent;
