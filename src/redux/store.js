import { createStore } from 'redux';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_CONTACT':
      const isContactExist = state.contacts.filter(
        con => con.name.toLowerCase() === payload.name.toLowerCase(),
      );
      if (isContactExist.length === 0) {
        return { contacts: [...state.contacts, payload] };
      } else {
        alert(`${payload.name} is already in contacts.`);
      }
      break;
    case 'DEL_CONTACT':
      return {
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
