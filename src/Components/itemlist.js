import React, { Component } from "react";

class Itemlist extends Component {

  
  render() {
    return (
      <div>
        {this.props.items.map((item) => {
          return (
              <div 
              key={item.name}
                style={{
                  borderRadius: "3px",
                  border: "1px solid black",
                  margin:"12px",
                  cursor:"pointer",
                  backgroundColor: item.type === 'veg' ? '#DAF7A6' : '#F88379'
                }}
                onClick={() => this.props.handleClickItem(item)}
              >
                {item.name}
              </div>
          );
        })}
      </div>
    );
  }
}

export default Itemlist;
