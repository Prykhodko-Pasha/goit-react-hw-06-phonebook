// import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import ContactsSearch from './ContactsSearch/ContactsSearch';
import s from './Contacts/Contacts.module.css';
import * as actions from '../redux/actions';

function Phonebook({ contacts, filter, onAddContact, onDelContact }) {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onAddContact = contact => {
  //   const isContactExist = contacts.filter(
  //     con => con.name.toLowerCase() === contact.name.toLowerCase(),
  //   );
  //   if (isContactExist.length === 0) {
  //     setContacts([...contacts, contact]);
  //   } else {
  //     alert(`${contact.name} is already in contacts.`);
  //   }
  // };

  // const filteredContactsArr = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter),
  //   );
  // };

  // const onSearch = e => {
  //   setFilter(e.currentTarget.value.toLowerCase());
  // };

  // const onDeleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <ContactsSearch />
            <Contacts />
          </>
        ) : (
          <div className={s.wrapper}>
            <p className={s.text}>No contacts yet</p>
          </div>
        )}
      </Section>
    </>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: contact => dispatch(actions.addContact(contact)),
    onDelContact: () => dispatch(actions.delContact()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
