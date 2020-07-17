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
      {/* Form */}
      <form>
        {/* Column 1 */}
        <div className="column1">
          <label name="name">Name:</label>
          <input type="text" value="Pet's name"></input>
          <br></br>
          <label name="breed">Breed:</label>
          <input type="text" value="Pet's breed"></input>
          <br></br>
           <label name="gender">Gender:</label>
            
        </div>
        {/* Column 2 */}
        <div className="column2">
          <img src="" alt="logo"></img>
          <label name="upload">Upload a photo</label>
          <br></br>
          <label name="birhday">Birthday:</label>
          <input type="date" value="MM/DD/YY"></input>
          <br></br>
          <label name="spayOrNeut">Spayed or Neutered?</label>
         </div>
        {/* Last Row */}
       <div className="lastRow">
        <label name="weight">Weight:</label>
        
        </div>
     
   
    </form>
    </div>
  );
  }
  
}

export default App;
