import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const logoAttrs = {
      alt: "logo",
      className: "App-logo",
      src: logo
    };

    const title = "こんにちは React";
    const targets = ["World", "Japan"];

    return (
      <div className="App">
        <header className="App-header">
          {
            // コメント
          }
          <img {...logoAttrs} />
          {title && <p>{title}</p>}
          {targets.map(target => (
            <p>Hello, {target}!</p>
          ))}
        </header>
      </div>
    );
  }
}

export default App;