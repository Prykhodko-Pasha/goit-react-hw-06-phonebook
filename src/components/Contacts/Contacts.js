import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import ContactsItem from '../ContactsItem/ContactsItem';
// import actions from '../../redux/actions';

function Contacts({ contactsArr, onDeleteContact }) {
  return (
    <ul className={s.contacts__list}>
      {contactsArr.map(({ id, name, number }) => (
        <li key={id} className={s.contacts__item}>
          <ContactsItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter),
  );
};

const mapStateToProps = state => {
  const { contacts, filter } = state;
  const visibleContacts = getVisibleContacts(contacts, filter);
  return {
    contacts: visibleContacts,
  };
};

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
// });

export default connect(mapStateToProps)(Contacts);
