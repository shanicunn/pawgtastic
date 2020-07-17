import React , {useState} from 'react';
import './App.css';
import styled from 'styled-components';

// Button Toggle styling
// Button tutorial
// https://www.youtube.com/watch?v=gP8nQVlrwc0
const Tab = styled.button`
  background-color: pink;
`
const ButtonToggle = styled(Tab)`
  opacity: 0.7;
  border: 0;
  outline: 0;
  ${({ active }) =>
  active &&
  ` 
  border: 1px black solid;
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
      onClick={() => setActive(genderType)}
      onGenderChange={ (e) => {
        e.preventDefault();
        this.setState ({
        gender: e.target.value,
      })}
  }
      >
      {genderType}</ButtonToggle>
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
      <ButtonToggle 
      active={active === spayOrNeut}
      onClick={() => setActive(spayOrNeut)}>
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
      <ButtonToggle active={active === weightClass}
      onClick={() => setActive(weightClass)}
      onGenderChange={ (e) => {
        e.preventDefault();
        this.setState ({
        gender: e.target.value,
    })}
  }>
        {weightClass}
      </ButtonToggle>
    )
    )
    }
  </div>
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      breed: "",
      gender: "",
      birthday: "",
      spayOrNeut: "",
      weight: "",
      formCompleted: false,
    }
      
    

  }

  // Form functions
  onNameChange = (e) => {
    this.setState ({
      name: e.target.value,
    })
  }
  onBreedChange = (e) => {
    this.setState ({
      breed: e.target.value,
    })
  }
  // onGenderChange = (e) => {
  //   this.setState ({
  //     gender: e.target.value,
  //   })
  // }
  onBirthdayChange = (e) => {
    this.setState ({
      birthday: e.target.value,
    })
  }
  // onSpayChange = (e) => {
  //   this.setState ({
  //     spayOrNeut: e.target.value,
  //   })
  // }
  // onWeightChange = (e) => {
  //   this.setState ({
  //     weight: e.target.value,
  //   })
  // }
  handleFormSubmission = (e) => {
     e.preventDefault();
     this.setState({
       formCompleted: true,
     })
   }
  render() {
   
    return (
    <div className="App">
      {/* Form */}
      <form>
        {/* Column 1 */}
        <div className="column1">
          <label name="name">Name:</label>
          <input type="text" 
          value={this.state.name}
          onChange={this.onNameChange}>
          </input>
          <br></br>
          <label name="breed">Breed:</label>
          <input type="text" 
          value={this.state.breed}
          onChange={this.onBreedChange}></input>
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
          <label name="birthday">Birthday:</label>
          <input type="date" 
          value={this.state.birthday}
          onChange={this.onBirthdayChange}></input>
          <br></br>
          <label name="spayOrNeut">Spayed or Neutered?</label>
          <ToggleGroupSpay />
         </div>

        {/* Last Row */}
       <div className="lastRow">
        <label name="weight">Weight:</label>
        <ToggleGroupWeight />
        </div>
     <button className="submit" type="submit" 
     onClick={this.handleFormSubmission}>Submit</button>
   
    </form>
    </div>
  );
  }
  
}

export default App;
