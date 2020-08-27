import React from 'react';
import ColumnOne from './ColumnOne';
import ColumnTwo from './ColumnTwo';
import BottomRow from './BottomRow';
// const { ColumnOne } = require("./ColumnOne")

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
          formCompleted: false,
        }
      }
      handleFormSubmission = (e) => {
        e.preventDefault();
        this.setState({
          formCompleted: true,
        })
      }
    render() {
        return (
            <form className="form">
                <div className="header">
                <h1>Yay, we love dogs! Give us the basics about your pup.</h1>
            </div>
      
        {/* Column 1 */}
            <div className="column1">
                <ColumnOne />
            </div>
        

        {/* Column 2 */}
            <div className="column2">
                <ColumnTwo />
            </div>
        
        

        {/* Last Row */}
            <div className="lastRow">
                <BottomRow />
            
                <button className="submit" type="submit" 
                onClick={this.handleFormSubmission}>Submit</button>
            </div>
            </form>
            
        )
    }
}
export default Form;