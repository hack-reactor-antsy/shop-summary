import React from 'react';
import ReactDOM from 'react-dom';
import ShopItemList from './shopItemList.jsx';
import ShopInfo from './shopInfo.jsx';
import style from './style.css.js';
import fetchShopItems from './ajax.js';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 0
    };
  }

  componentDidMount() { 
    this.updateShopItems();    
  }

  updateShopItems() {
    fetchShopItems((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        items: data
      });
    });
  }

  render() {
    return (
      <div className="container" style={style.container}>
        <ShopInfo />
        <br/>
        <div className="column" style={style.column}>
          <ShopItemList items={this.state.items} page={this.state.page}/>
        </div>

        <span className="handler" style={style.toggle}>
          <button className="button" style={style.button}> <b>&lt;</b> </button>
          <button className="button" style={style.button}> <b>&gt;</b> </button>
        </span>

      </div>
    );
  }
}

export default Summary;