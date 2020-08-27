import React , {useState} from 'react';
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
  margin-left: 5px;
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
export {ToggleGroupGender, ToggleGroupSpay, ToggleGroupWeight};