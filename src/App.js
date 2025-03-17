import "./App.css";
import NavbarComponent from "./Components/Navbar";
import Menu from "./Components/Menu";
import Items from "./Components/Items";
import Cart from "./Components/Cart";
import data from "./Components/items.json";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: data,
      cart: [],
    };
  }
// test
  clickVeg = () => {
    let originalItems = data.filter((item) => item.type === "veg");
    this.setState({ items: originalItems });
  };

  clickNonVeg = () => {
    let originalItems = data.filter((item) => item.type === "Non-veg");
    this.setState({ items: originalItems });
  };

  handleClickItem = (item) => {
    let cartItems = this.state.cart;
    let index = cartItems.findIndex((cart) => cart.name === item.name);
    if (index > -1) {
      cartItems[index].quantity = cartItems[index].quantity + 1;
      this.setState({ cart: cartItems });
     } 
     else {
      this.setState({ cart: [...this.state.cart, item] });
    }
  };

  decrement = (index) => {
    let cartItems = this.state.cart;
    if (cartItems[index].quantity === 1) {
      cartItems.splice(index, 1);
      this.setState({ cart: cartItems });
    } else {
      cartItems[index].quantity = cartItems[index].quantity - 1;
      this.setState({ cart: cartItems });
    }
  };

  increment = (index) => {
    let cartItems = this.state.cart;
    cartItems[index].quantity = cartItems[index].quantity + 1;
    this.setState({ cart: cartItems });
  };

  remove = (index) => {
    let cartItems = this.state.cart;
    cartItems[index].quantity = 1;
    cartItems.splice(index, 1);
    this.setState({ cart: cartItems });
  };

  changeInput=(e,index)=>{
    if(e.target.value != '0'){
      
      let cartItems = this.state.cart;
      cartItems[index].quantity = Number(e.target.value)
      this.setState({ cart: cartItems });
    }

  }
  handleRest =()=>{
    this.setState({items:data})
    console.log('click')
  }

  render() {
    return (
      <>
        <NavbarComponent />
        <div className="rows">
          <Menu clickVeg={this.clickVeg} clickNonVeg={this.clickNonVeg} clickRest={this.handleRest}/>
          <Items
            items={this.state.items}
            handleClickItem={this.handleClickItem}
          />
          <Cart
            selectedItems={this.state.cart}
            decrement={this.decrement}
            increment={this.increment}
            remove={this.remove}
            changeInput={this.changeInput}
          />
        </div>
      </>
    );
  }
}

export default App;
