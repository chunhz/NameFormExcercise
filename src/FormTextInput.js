import React, { Component } from "react";

class FormTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      first: 'Invalid', // initiate value first to be 'Invalid'
      
      last: 'Invalid', // initiate value last to be 'Invalid'
      
      edit: false, // set initial edit state to be false
    }
  }
    // triggered when button 'edit' is clicked
    edit = () => {
      this.setState({ edit:true });
    }

    // triggered when button 'save' is clicked
    save = (event) => {
      event.preventDefault();
      alert("You have saved: " + this.state.last + ", " + this.state.first)
      this.setState({first1: this.state.first}) 
      // stores the value of first into first1 when clicked 'save'
      this.setState({last1: this.state.last})
      // store the value of last into last1 when clicked 'save'
      this.setState({ edit: false }) 
    }

    // triggered when button 'cancel' is clicked
    cancel = (event) => { 
      this.setState({ last: this.state.last1 }) // takes value last1 into last
      this.setState({ first: this.state.first1 }) // take value first1 into first
      this.setState({ edit: false }) 
    }
  
    // triggered by input in last name text box 
    handleLastNameChange = (event) => { 
      this.setState({last: event.target.value})
    }

    // triggered by input in first name text box
    handleFirstNameChange = (event) => { 
      this.setState({first: event.target.value})
    }
  
  render() {
    return (
      <div>
         {this.state.edit ?  // if state of edit is true, do following:
         <div>
           <h1>Last Name: {this.state.last}</h1> {/* gets the value from constructor to displays last name */}
           <h1>First Name: {this.state.first}</h1> {/* gets the value from constructor to displays first name */}
           <input
            type = "text"
            name = "lastName"
            placeholder = "Enter Last Name Here"
            onChange = {this.handleLastNameChange} //call handleLastNameChange function to set the value into last
            />
           <input
            type = "text"
            name = "firstName"
            placeholder = "Enter First Name Here"
            onChange = {this.handleFirstNameChange} //call handleFirstNameChange function to set the value into first
            />
            <div>
              <button onClick = {this.save}>Save</button>
              <button onClick = {this.cancel}>Cancel</button>
            </div>
          </div>
         : // else if state of edit is false, do following :
          <div>
          <h1>Last Name: {this.state.last}</h1>{/* gets the value from constructor to displays last name */}
          <h1>First Name: {this.state.first}</h1>{/* gets the value from constructor to displays first name */}
          <button onClick = {this.edit}>Edit</button>
          </div>
        
         }
      </div>
       
       
    );
  }
}

export default FormTextInput;