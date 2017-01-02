import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Divider from 'material-ui/Divider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Divider />
        {this.props.children}

      </div>
    );
  }
}

export default App;
