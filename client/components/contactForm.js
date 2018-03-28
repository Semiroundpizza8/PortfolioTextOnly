import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

class TextFieldExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      content: ''
    }
  }

  handleChange = (event) => {
    let newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState);
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Contact Me</h1>
        <TextField
          name="name"
          hintText="Benjamin Odisho"
          floatingLabelText="Name"
          value={this.state.name}
          onChange={this.handleChange}
        /><br />
        <TextField
          hintText="Semiroundpizza8@gmail.com"
          floatingLabelText="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        /><br />
        <TextField
          hintText="773-633-0078"
          floatingLabelText="Phone"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        /><br />
        <TextField
          floatingLabelText="Content"
          name="contact"
          value={this.state.content}
          onChange={this.handleChange}
          multiLine={true}
          rows={2}
          rowsMax={4}
        /><br />
      </div>
    );
  }
}
export default TextFieldExampleSimple;
