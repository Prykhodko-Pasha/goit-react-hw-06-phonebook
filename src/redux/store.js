import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'ADD_CONTACT':
//       const isContactExist = state.contacts.filter(
//         con => con.name.toLowerCase() === payload.name.toLowerCase(),
//       );
//       if (isContactExist.length === 0) {
//         return { ...state, contacts: [...state.contacts, payload] };
//       } else {
//         alert(`${payload.name} is already in contacts.`);
//       }
//       break;
//     case 'DEL_CONTACT':
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload),
//       };
//     default:
//       return state;
//   }
// };

const store = createStore(reducer, composeWithDevTools());

export default store;
