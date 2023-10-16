import React from 'react';

const iconStyles = {
  marginRight: '10px',
};

export default function Footer() {
  return (
    <footer>
      <div className="address">
        Адрес: Carrer de la Vinya Город: Энкамп Почтовый индекс: AD200
        Государство: Андорра
      </div>
      <div>
        <i className="fa fa-link" style={iconStyles}></i>
        <a href="/">Главная</a> | <a href="/о-нас">О нас</a> |
        <a href="/контакты"> Контакты</a>
      </div>
      <a href="https://github.com/tiramisa" className="catSoft">
        &copy; catSoft
      </a>
    </footer>
  );
}
