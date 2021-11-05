export const addContact = value => ({
  type: 'ADD_CONTACT',
  payload: value,
});

export const delContact = value => ({
  type: 'DEL_CONTACT',
  payload: value,
});

export const searchContact = value => ({
  type: 'SEARCH_CONTACT',
  payload: value,
});
