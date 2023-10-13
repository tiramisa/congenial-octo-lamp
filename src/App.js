import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from 'components/Categories';
import ShowFullItem from 'components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          img: 'pillow.jpeg',
          title: 'Подушка',
          price: 19.99,
          description: 'Мягкая подушка для комфортного сна.',
          category: 'pillows',
        },
        {
          id: 2,
          img: 'plaid.jpeg',
          title: 'Плед',
          price: 34.99,
          description: 'Теплый и уютный плед для холодных вечеров.',
          category: 'plaids',
        },
        {
          id: 3,
          img: 'table.jpeg',
          title: 'Кофейный столик',
          price: 89.99,
          description: 'Современный кофейный столик для вашей гостиной.',
          category: 'tables',
        },
        {
          id: 4,
          img: 'vase.jpeg',
          title: 'Ваза',
          price: 12.99,
          description: 'Элегантная ваза для цветов.',
          category: 'vases',
        },
        {
          id: 5,
          img: 'lamp.jpeg',
          title: 'Лампа',
          price: 15.99,
          description: 'Уютная лампа для спальни.',
          category: 'lamps',
        },
        {
          id: 6,
          img: 'chair.jpeg',
          title: 'Кресло',
          price: 15.99,
          description: 'Удобное и стильное кресло.',
          category: 'chairs',
        },
      ],
      showFullItem: false,
    };
    this.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOder = this.deleteOder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem />}
        <Footer />
      </div>
    );
  }

  OnShowItem() {
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category),
    });
  }

  deleteOder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
