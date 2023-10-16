import React from 'react';

const iconStyles = {
  marginRight: '10px',
};

export default function Footer() {
  return (
    <footer>
      <div className="address">
        Адрес: Carrer de la Vinya, Энкамп, AD200, Андорра
      </div>
      <div>
        <i className="fa fa-link" style={iconStyles}></i>
        <a href="index.html">Главная</a> | <a href="index.html">О нас</a> |
        <a href="index.html"> Контакты</a>
      </div>
      <a href="https://github.com/tiramisa" className="catSoft">
        &copy; catSoft
      </a>
    </footer>
  );
}
