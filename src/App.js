import React , {useState} from 'react';

import './App.css';
// Gender Button function
const genderTypes = ["Female", "Male",]
function ToggleGroupGender() {
  const [active, setActive] = useState(genderTypes[0]);
  return <div>
    {genderTypes.map(genderTypes => (
      <button>
        {genderTypes}
      </button>
    ))}
  </div>
}
// Spay Button function
const spayOrNeut = ["Spayed", "Neutered"]
function ToggleGroupSpay() {
  const [active, setActive] = useState(spayOrNeut[0]);
  return <div>
    {spayOrNeut.map(spayOrNeut =>  (
      <button>
        {spayOrNeut}
      </button>
    ))}
  </div>
}
// Weight Button function
const weightClass = ["0-25 lbs", "24-50 lbs", "50-100 lbs", "100+ lbs"]
function ToggleGroupWeight() {
  const [active, setActive] = useState(weightClass[0]);
  return <div>
    {weightClass.map(weightClass => (
      <button>
        {weightClass}
      </button>
    ))}
  </div>
}

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
            <ToggleGroupGender />
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
          <ToggleGroupSpay />
         </div>
        {/* Last Row */}
       <div className="lastRow">
        <label name="weight">Weight:</label>
        <ToggleGroupWeight />
        </div>
     
   
    </form>
    </div>
  );
  }
  
}

export default App;
