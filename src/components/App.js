import { useSelector } from 'react-redux';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import ContactsSearch from './ContactsSearch/ContactsSearch';
import s from './Contacts/Contacts.module.css';
import { getItems } from '../redux/selectors';

export default function Phonebook() {
  const items = useSelector(getItems);

  return (
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
  );
}

//======= vinilla redux =======
// const mapStateToProps = state => {
//   return {
//     items: state.contacts.items,
//   };
// };

// export default connect(mapStateToProps)(Phonebook);
