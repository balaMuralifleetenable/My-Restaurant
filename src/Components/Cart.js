import React, { Component } from "react";

class Cart extends Component {
  render() {
    const { selectedItems } = this.props;
    return (
      <>
        <div className="Row3">
          <h3>Cart</h3>

          <div className="tabular">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>item</th>
                  <th>quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              {selectedItems &&
                selectedItems.map((item, index) => (
                  <tbody key={item.name}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <button
                          id="btn"
                          onClick={() => this.props.decrement(index)}
                        >
                          -
                        </button>
                         <input type='number' value={item.quantity} onChange={(e)=> this.props.changeInput(e,index)}/>
                        <button
                          id="btn"
                          onClick={() => this.props.increment(index)}
                        >
                          +
                        </button>
                        <button
                          id="rem"
                          onClick={() => this.props.remove(index)}
                        >
                          Remove
                        </button>
                      </td>

                      <td>
                        {"Rs. "}
                        {item.price * item.quantity}
                        {"/-"}
                      </td>
                    </tr>
                  </tbody>
                ))}
              <tr>
                Total={" "}
                {selectedItems.reduce((total, item) => total + item.price*item.quantity, 0)}{" "}
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
