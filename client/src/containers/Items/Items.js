import React, { Component } from "react";
import Item from "../../components/Item/Item";

class Items extends Component {
  state = {
    items: [
      { name: "Milk", id: 312312 },
      { name: "Eggs", id: 31234412 },
      { name: "Syrup", id: 312356712 },
      { name: "Pancakes", id: 3123812 }
    ],
    newItem: ""
  };

  itemDeleteHandler = id => {
    const items = [...this.state.items];

    const updatedItems = items.filter(item => {
      return item.id !== id;
    });

    this.setState({ items: updatedItems });
  };

  onChangeHandler = e => {
    let newItem = [...this.state.newItem];
    newItem = e.target.value;

    this.setState({ newItem: newItem });
  };

  addItemHandler = e => {
    e.preventDefault();
    let newItem = {
      name: this.state.newItem,
      id: this.state.newItem + Math.random() * 1000000
    };

    let items = [newItem, ...this.state.items];

    this.setState({ items: items, newItem: "" });
  };

  render() {
    const items = this.state.items.map(item => {
      return (
        <Item
          delete={this.itemDeleteHandler.bind(this, item.id)}
          key={item.id}
          name={item.name}
        />
      );
    });
    return (
      <div>
        {items}
        <form onSubmit={e => this.addItemHandler(e)}>
          <input
            style={{
              width: "30%",
              marginLeft: "10%",
              marginTop: "50px",
              padding: "50px",
              fontSize: "40px"
            }}
            type="text"
            onChange={e => this.onChangeHandler(e)}
            placeholder="Add An Item"
            value={this.state.newItem}
          />
        </form>
      </div>
    );
  }
}

export default Items;
