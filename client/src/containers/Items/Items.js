import React, { Component } from "react";
import Item from "../../components/Item/Item";

class Items extends Component {
  state = {
    items: [
      { name: "Milk", id: 312312 },
      { name: "Eggs", id: 31234412 },
      { name: "Syrup", id: 312356712 },
      { name: "Pancakes", id: 3123812 }
    ]
  };

  itemDeleteHandler = id => {
    const items = [...this.state.items];

    const updatedItems = items.filter(item => {
      return item.id !== id;
    });

    this.setState({ items: updatedItems });
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
    return <div>{items}</div>;
  }
}

export default Items;
