import React from 'react';
import {ToggleGroupWeight} from './ToggleButton';

class BottomRow extends React.Component {
    constructor() {
        super();
        this.state = {
          weight: "",
        }
      }
        // onWeightChange = (e) => {
  //   this.setState ({
  //     weight: e.target.value,
  //   })
  // }
      render() {
          return (
      
        <div className="lastRow">
            <label name="weight">Weight:</label>
            <ToggleGroupWeight />
        </div>
    )
      }
    
}
export default BottomRow;