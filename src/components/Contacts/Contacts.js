import { useSelector } from 'react-redux';
import s from './Contacts.module.css';
import ContactsItem from '../ContactsItem/ContactsItem';

export default function Contacts() {
  const contacts = useSelector(state => {
    const { items, filter } = state.contacts;
    return items.filter(item => item.name.toLowerCase().includes(filter));
  });

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

//======= vinilla redux =======
// const getVisibleContacts = (items, filter) => {
//   return items.filter(item => item.name.toLowerCase().includes(filter));
// };

// const mapStateToProps = state => {
//   const { items, filter } = state.contacts;
//   const visibleContacts = getVisibleContacts(items, filter);
//   return {
//     contacts: visibleContacts,
//   };
// };

// export default connect(mapStateToProps)(Contacts);
