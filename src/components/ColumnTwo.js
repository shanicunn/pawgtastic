import React from 'react';
import paw from '../assets/images/paw.png';
import {ToggleGroupSpay} from './ToggleButton';

class ColumnTwo extends React.Component {
    constructor() {
        super();
        this.state = {
          birthday: "",
          spayOrNeut: "",
        }
      }
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
    render() {
        return (
            <div >
                <img src={paw} alt="Found on flaticon.com"></img>
                {/* <br></br> */}
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
        )
    }
}
export default ColumnTwo;