import React , {useState} from 'react';
import './App.css';
import styled from 'styled-components';

// Button Toggle styling
const Button = styled.button`
  background-color: pink;
`
const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active })=>
  active &&
  ` 
  opacity: 1;
  `
  }
  `

// Gender Button function
const genderTypes = ["Female", "Male",]
function ToggleGroupGender() {
  const [active, setActive] = useState(genderTypes[0]);
  return (
    <div>
      {genderTypes.map(genderType => (
      <ButtonToggle
      active={active === genderType}
      >{genderType}</ButtonToggle>
    )
    )
    }
  </div>
  )
}
// Spay Button function
const spayOrNeuts = ["Spayed", "Neutered"]
function ToggleGroupSpay() {
  const [active, setActive] = useState(spayOrNeuts[0]);
  return <div>
    {spayOrNeuts.map(spayOrNeut =>  (
      <ButtonToggle active={active === spayOrNeut}>
        {spayOrNeut}
      </ButtonToggle>
    )
    )
    }
  </div>
}
// Weight Button function
const weightClasses = ["0-25 lbs", "24-50 lbs", "50-100 lbs", "100+ lbs"]
function ToggleGroupWeight() {
  const [active, setActive] = useState(weightClasses[0]);
  return <div>
    {weightClasses.map(weightClass => (
      <ButtonToggle active={active === weightClass}>
        {weightClass}
      </ButtonToggle>
    )
    )
    }
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
          <img src="/public/logo512.png" alt="Found on flaticon.com"></img>
          <br></br>
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
