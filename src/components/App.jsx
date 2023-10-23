import React from 'react';
import { nanoid } from 'nanoid';
import { Input } from './Input/Input';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };

    if (this.state.contacts.some(contact => contact.name === name)) {
      Notify.failure(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };

  handleSetFilter = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  handleDeleteContact = (id, name) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    Notify.success(`${name} was successfully deleted from your Phonebook`);
  };

  render() {
    const { filter } = this.state;
    const filteredContact = this.getFilteredContact(filter);
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm newContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterInput={this.hendleFilterInput} />
        <ContactList
          contacts={filteredContact}
          onDelete={this.hendleDeleteContact}
        />
      </Wrapper>
    );
  }
}
