import React, { Component } from 'react';
import { ImCancelCircle } from 'react-icons/im';
export class ShowFullItem extends Component {
  componentDidMount() {
    document.body.classList.add('modal-open');
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-open');
  }
  render() {
    return (
      <div className="full-item">
        <div>
          <button className="close-button" onClick={this.props.onClose}>
            <ImCancelCircle />
          </button>
          <img
            className=""
            src={'./img/' + this.props.item.img}
            alt=""
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
      </div>
    );
  }
}

export default ShowFullItem;
