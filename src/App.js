import React from 'react';

import './App.css';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = [

  //   ]

  // }
  render() {
    return (
    <div className="App">
    <form>
    <div className="column1">
      <label name="name">Name:</label>
      <input type="text" value="Pet's name"></input>
      <br></br>
       <label name="breed">Breed:</label>
      <input type="text" value="Pet's breed"></input>
      <br></br>

    </div>
      <div className="column2">
        <img src="" alt="logo"></img>
      <label name="upload">Upload a photo</label>
      <br></br>
        <label name="birhday">Birthday:</label>
      <input type="date" value="MM/DD/YY"></input>
      </div>
     <div className="lastRow">
       
     </div>
     
   
    </form>
    </div>
  );
  }
  
}

export default App;
