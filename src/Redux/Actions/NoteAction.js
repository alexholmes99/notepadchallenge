import * as actionTypes from "./NoteActionTypes";

export const setNote = (value) => {
  return {
    type: actionTypes.SET_NOTE,
    value,
  };
};

export const sortNote = () => {
  return {
    type: actionTypes.SORT_NOTE,
  };
};

export const updateNote = (newNote) => {
  return {
    type: actionTypes.UPDATE_NOTE,
    newNote,
  };
};

export const deleteNote = (id) => {
  return {
    type: actionTypes.DELETE_NOTE,
    id,
  };
};
