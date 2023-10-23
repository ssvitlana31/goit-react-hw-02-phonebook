import React from 'react';
import PropTypes from 'prop-types';

export class Input extends Comment {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <label>
            <Input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <p>Number</p>
          <label>
            <Input
              type="phone"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Phone"
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

Input.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
