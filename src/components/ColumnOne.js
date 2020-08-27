import React from 'react';
import {ToggleGroupGender} from './ToggleButton';


class ColumnOne extends React.Component {
    constructor() {
        super();
        this.state = {
          name: "",
          breed: "",
          gender: "",
        }
      }
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
    render() {
        return (
            
            <div>
            {/* Column 1 */}
                <label name="name">Name:</label>
                <input type="text" value={this.state.name} onChange={this.onNameChange} />
                <br></br>
                <label name="breed">Breed:</label>
                <input type="text" 
                value={this.state.breed}
                onChange={this.onBreedChange} />
                <br></br>
                <label name="gender">Gender:</label>
                <ToggleGroupGender />
            </div>
        )
    }
    
}
export default ColumnOne;