import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          img: "pillow.jpeg",
          title: "Подушка",
          price: 19.99,
          description: "Мягкая подушка для комфортного сна.",
          category: "pillows",
        },
        {
          id: 2,
          img: "plaid.jpeg",
          title: "Плед",
          price: 34.99,
          description: "Теплый и уютный плед для холодных вечеров.",
          category: "plaids",
        },
        {
          id: 3,
          img: "table.jpeg",
          title: "Кофейный столик",
          price: 89.99,
          description: "Современный кофейный столик для вашей гостиной.",
          category: "tables",
        },
        {
          id: 4,
          img: "vase.jpeg",
          title: "Ваза",
          price: 12.99,
          description: "Элегантная ваза для цветов.",
          category: "vases",
        },
        {
          id: 5,
          img: "lamp.jpeg",
          title: "Лампа",
          price: 15.99,
          description: "Уютная лампа для спальни.",
          category: "lamps",
        },
        {
          id: 6,
          img: "chair.jpeg",
          title: "Кресло",
          price: 15.99,
          description: "Удобное и стильное кресло.",
          category: "chairs",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOder = this.deleteOder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOder(id) {
    console.log(id);
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
