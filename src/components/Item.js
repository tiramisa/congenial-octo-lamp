import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={'./img/' + this.props.item.img}
          alt="HI "
          onClick={() => this.props.onShowItem(this.props.item)}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}$</p>
        <b>{this.props.item.description}</b>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
      </div>
    );
  }
}

export default Item;
