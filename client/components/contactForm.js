import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

class TextFieldExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      content: '',
      disableSubmit: true
    }
  }

  handleChange = (event) => {
    let newState = {}
    let allChanged = true;

    newState[event.target.name] = event.target.value;
    for (var i in this.state) {
      if (typeof this.state[i] === 'string' && !this.state[i].length) {
        allChanged = false;
      }
    }

    newState.disableSubmit = !allChanged;

    this.setState(newState);
  }

  handleSubmit = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
      content: '',
      disableSubmit: true
    }).then(() => {
      axios.post('/api/email', this.state)
    })
  }


  render() {
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
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          multiLine={true}
          fullWidth={true}
          rows={2}
          rowsMax={4}
        /><br />
        <FlatButton
          label="Submit"
          primary={true}
          onClick={this.handleSubmit}
          disabled={this.state.disableSubmit}
        />
      </div>
    );
  }
}
export default TextFieldExampleSimple;
