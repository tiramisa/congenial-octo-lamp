import React, { Component } from 'react';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Всё',
        },
        {
          key: 'tables',
          name: 'Столы',
        },
        {
          key: 'chairs',
          name: 'Стулья',
        },
        {
          key: 'pillows',
          name: 'Подушки',
        },
        {
          key: 'lamps',
          name: 'Лампы',
        },
        {
          key: 'vases',
          name: 'Вазы',
        },
      ],
    };
    props.chooseCategory('all');
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
