import React from 'react';
import './App.css';
import Form from './components/Form';





class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "",
  //     breed: "",
  //     gender: "",
  //     birthday: "",
  //     spayOrNeut: "",
  //     weight: "",
  //     formCompleted: false,
  //   }
  // }

  // Form functions

 
  render() {
   
    return (
    <div className="App">
      <div className="sideBar">
        {/* <h2>Pawtastic</h2> */}
        
      </div>
      <div className="form">
        {/* Form */}
        <Form />
      </div>
    </div>
  );
  }
  
}

export default App;
