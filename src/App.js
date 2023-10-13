import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

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
      fullItem: {},
    };
  }

  closeShowFullItem = () => {
    this.setState({
      showFullItem: false,
      fullItem: {},
    });
  };

  onShowItem = item => {
    if (item) {
      this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
    }
  };

  chooseCategory = category => {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({
        currentItems: this.state.items.filter(
          item => item.category === category
        ),
      });
    }
  };

  deleteOrder = id => {
    this.setState({
      orders: this.state.orders.filter(order => order.id !== id),
    });
  };

  addToOrder = item => {
    const isInArray = this.state.orders.some(order => order.id === item.id);
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            onClose={this.closeShowFullItem}
            item={this.state.fullItem}
          />
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
