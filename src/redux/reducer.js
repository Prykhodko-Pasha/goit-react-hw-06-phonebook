import { combineReducers } from 'redux';
import * as types from './types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DEL:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.SEARCH:
      return payload;

    default:
      return state;
  }
};
// const search = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.SEARCH:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({ items, filter });
