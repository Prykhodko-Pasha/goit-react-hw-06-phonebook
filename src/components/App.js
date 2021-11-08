import { connect } from 'react-redux';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import ContactsSearch from './ContactsSearch/ContactsSearch';
import s from './Contacts/Contacts.module.css';
// import store from '../redux/store';

function Phonebook({ items }) {
  return (
    // <Provider store={store.store}>
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        {items.length > 0 ? (
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
    // </Provider>
  );
}

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
  };
};

export default connect(mapStateToProps)(Phonebook);
