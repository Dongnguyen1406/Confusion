import React from 'react';
import { LocalForm, Control } from 'react-redux-form';

class ContactForm extends React.Component {
  handleSubmit = values => {
    console.log(values);
  };

  required = val => val && val.length;

  render() {
    return (
      <LocalForm onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <Control.text model=".name" validators={{ required: this.required }} />
        <span className="error">
          <Control.errors model=".name" show="touched" messages={{ required: 'Name is required' }} />
        </span>

        <label>Email:</label>
        <Control.text model=".email" validators={{ required: this.required }} />
        <span className="error">
          <Control.errors model=".email" show="touched" messages={{ required: 'Email is required' }} />
        </span>

        <button type="submit">Submit</button>
      </LocalForm>
    );
  }
}

export default ContactForm;