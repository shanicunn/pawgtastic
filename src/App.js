import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = [

    ]

  }
  render() {
    return (
    <div className="App">
    <form>
      <label name="name">Name:</label>
      <input type="text" value="Pet's name"></input>
    </form>
    </div>
  );
  }
  
}

export default App;
