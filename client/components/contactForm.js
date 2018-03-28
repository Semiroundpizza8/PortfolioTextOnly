import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

const TextFieldExampleSimple = () => (
  <div>
    <h1>Contact Me</h1>
    <TextField
      hintText="Benjamin Odisho"
      floatingLabelText="Name"
    /><br />
    <TextField
      hintText="Semiroundpizza8@gmail.com"
      floatingLabelText="Email"
    /><br />
    <TextField
      hintText="773-633-0078"
      floatingLabelText="Phone"
    /><br />
    <TextField
      floatingLabelText="Content"
      multiLine={true}
      rows={2}
      rowsMax={4}
    /><br />
  </div>
);

export default TextFieldExampleSimple;
