import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Contact key={nanoid()}>
          <span>
            {contact.name} {contact.number}
          </span>
          <Button onClick={() => onDeleteContact(contact.id)} Delete></Button>
        </Contact>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
