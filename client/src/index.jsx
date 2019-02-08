import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Shop</h1>
      </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('summary'));