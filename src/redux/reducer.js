import * as types from './types';

const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

const initialState = {
  items: parsedContacts || [],
  filter: '',
};

const reducers = (state = initialState, { type, payload }) => {
  const { items } = state;

  switch (type) {
    case types.ADD:
      localStorage.setItem('contacts', JSON.stringify([...items, payload]));
      return { ...state, items: [...items, payload] };

    case types.DEL:
      const newContactsArr = items.filter(item => item.id !== payload);
      localStorage.setItem('contacts', JSON.stringify(newContactsArr));
      return { ...state, items: newContactsArr };

    case types.SEARCH:
      return { ...state, filter: payload };

    default:
      return state;
  }
};

export default reducers;
