import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('Phonebook/add', (name, number) => ({
  payload: { name: name, number: number, id: uuidv4() },
}));

export const delContact = createAction('Phonebook/del');

export const searchContact = createAction('Phonebook/search');

//======= vinilla redux =======
// import * as types from './types';
// import { v4 as uuidv4 } from 'uuid';

// export const addContact = (name, number) => {
//   return {
//     type: types.ADD,
//     payload: { name: name, number: number, id: uuidv4() },
//   };
// };

// export const delContact = contactId => ({
//   type: types.DEL,
//   payload: contactId,
// });

// export const searchContact = value => ({
//   type: types.SEARCH,
//   payload: value,
// });
