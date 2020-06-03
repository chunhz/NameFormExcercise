import React, { Component } from "react";

class FormTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: 'Invalid',
      lastName: 'Invliad',
      edit: false,
      // lastName: '
    }
  }
    edit = (event) => {
      this.setState({edit:true});
    }

    save = (event) => {
      event.preventDefault();
      alert("You have saved: " + this.state.last + ", " + this.state.first)
      this.setState({ edit: false})
    }

    cancel = (event) => {
      this.setState({lastName: event.target.value})
      this.setState({ firstName: event.target.value})
      this.setState({ edit: false})
    }
  
  
    handleLastNameChange = (event) => {
      this.setState({last: event.target.value})
    }
    handleFirstNameChange = (event) => {
      this.setState({first: event.target.value})
    }
  
  render() {
    return (
      <div>
         {this.state.edit ?
         <div>
           <h1>Last Name: {this.state.last}</h1>
           <h1>First Name: {this.state.first}</h1>
           <input
            type = "text"
            name = "lastName"
            placeholder = "Enter Last Name Here"
            onChange = {this.handleLastNameChange}
            />
           <input
            type = "text"
            name = "firstName"
            placeholder = "Enter First Name Here"
            onChange = {this.handleFirstNameChange}
            />
            <div>
              <button onClick = {this.save}>Save</button>
              <button onClick = {this.cancel}>Cancel</button>
            </div>
          </div>
         :
          <div>
          <h1>Last Name: {this.state.lastName}</h1>
          <h1>First Name: {this.state.firstName}</h1>
          <button onClick = {this.edit}>Edit</button>
          </div>
        
         }
      </div>
       
       
    );
  }
}

export default FormTextInput;