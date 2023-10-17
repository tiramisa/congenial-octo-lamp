import React, { useState } from 'react';
import MyModal from '../components/Burger';
import { FaShoppingCart } from 'react-icons/fa';
import { ImMenu, ImCancelCircle } from 'react-icons/im';

import Order from './Order';

const showOrders = props => {
  let summa = 0;
  props.orders.forEach(el => (summa += Number.parseFloat(el.price)));
  summa = summa.toFixed(2);

  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Сумма: {summa}$</p>
    </div>
  );
};
const showNothing = () => {
  return (
    <div className="empty">
      <h2 class="shopping-message">
        Начните покупки, чтобы добавить товары в корзину.
      </h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <header>
      <div>
        <div className="header">
          <a href="index.html" className="logo">
            House Staff
          </a>
          <ul className="nav">
            <li>
              <a href="index.html">Про нас</a>
            </li>
            <li>
              <a href="index.html">Контакты</a>
            </li>
            <li>
              <a href="index.html">Кабинет</a>
            </li>
          </ul>
          <div className="header-btn">
            <FaShoppingCart
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`shop-card-button ${cartOpen && 'active'}`}
            />
            <ImMenu className="burger" onClick={openModal} />
            <MyModal isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
        </div>

        {cartOpen && (
          <div className="shop-cart">
            <button className="close-button" onClick={() => setCartOpen(false)}>
              <ImCancelCircle />
            </button>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
