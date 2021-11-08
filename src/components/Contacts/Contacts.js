import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import ContactsItem from '../ContactsItem/ContactsItem';

function Contacts({ contacts }) {
  return (
    <ul className={s.contacts__list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contacts__item}>
          <ContactsItem id={id} name={name} number={number} />
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
};

const getVisibleContacts = (items, filter) => {
  return items.filter(item => item.name.toLowerCase().includes(filter));
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const visibleContacts = getVisibleContacts(items, filter);
  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(Contacts);
