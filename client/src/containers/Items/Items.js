import React, { Component } from "react";
import Item from "../../components/Item/Item";
import { connect } from "react-redux";
import * as actions from "../../store/actions/item";

class Items extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  itemDeleteHandler = id => {
    this.props.deleteItem(id);
  };

  onChangeHandler = e => {
    this.props.createItem(e);
  };

  addItemHandler = e => {
    e.preventDefault();
    const newItem = {
      name: this.props.newItem
    };

    this.props.addItem(newItem);
  };

  render() {
    const items = this.props.items.map(item => {
      return (
        <Item
          delete={this.itemDeleteHandler.bind(this, item._id)}
          key={item._id}
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
            value={this.props.newItem}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    newItem: state.newItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(actions.getItems()),
    addItem: newItem => dispatch(actions.addItem(newItem)),
    createItem: e => dispatch(actions.createItem(e)),
    deleteItem: id => dispatch(actions.deleteItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
