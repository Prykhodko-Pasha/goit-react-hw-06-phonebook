import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  items: [],
  filter: '',
};

const reducers = createReducer(initialState, {
  [actions.addContact]: (state, { payload }) => {
    return { ...state, items: [...state.items, payload] };
  },
  [actions.delContact]: (state, { payload }) => {
    const newContactsArr = state.items.filter(item => item.id !== payload);
    return { ...state, items: newContactsArr };
  },
  [actions.searchContact]: (state, { payload }) => ({
    ...state,
    filter: payload,
  }),
});

export default reducers;

//======= vinilla redux =======
// import * as types from './types';

// const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

// const initialState = {
//   items: parsedContacts || [],
//   filter: '',
// };

// const reducers = (state = initialState, { type, payload }) => {
//   const { items } = state;

//   switch (type) {
//     case types.ADD:
//       localStorage.setItem('contacts', JSON.stringify([...items, payload]));
//       return { ...state, items: [...items, payload] };

//     case types.DEL:
//       const newContactsArr = items.filter(item => item.id !== payload);
//       localStorage.setItem('contacts', JSON.stringify(newContactsArr));
//       return { ...state, items: newContactsArr };

//     case types.SEARCH:
//       return { ...state, filter: payload };

//     default:
//       return state;
//   }
// };

// export default reducers;
