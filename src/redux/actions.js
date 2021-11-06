import * as types from './types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = (name, number) => ({
  type: types.ADD,
  payload: { name, number, id: uuidv4() },
});

export const delContact = contactId => ({
  type: types.DEL,
  payload: contactId,
});

export const searchContact = value => ({
  type: types.SEARCH,
  payload: value,
});
