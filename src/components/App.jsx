import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, Subtitle, Container } from './App.styled';
import initialContacts from '../data/contacts';

export class App extends React.Component {
  state = {
    contacts: initialContacts,
    filter: '',
    name: '',
    number: ''
  };

  addContact = data => {
    this.setState(({ contacts }) =>
      contacts.find(contact => contact.name === data.name)
        ? alert(`${data.name} is already in contacts`)
        : { contacts: [data, ...contacts] }
    );
  };

  onFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onFilterChange={this.onFilterChange} />
        <ContactList deleteContact={this.deleteContact} contacts={filteredContacts} />
      </Container>
    );
  }
}
