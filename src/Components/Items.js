import React, { Component } from 'react';
import Itemlist from './itemlist';

class Items extends Component {
  render() {
    return (
      <div className="Row2">
        <h3>Items</h3>
        <Itemlist items={this.props.items} handleClickItem={this.props.handleClickItem}/>
      </div>
    );
  }
}

export default Items;
