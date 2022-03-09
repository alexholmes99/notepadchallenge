import * as actionTypes from "./NoteActionTypes";

export const setNote = (value) => {
  return {
    type: actionTypes.SET_NOTE,
    value,
  };
};

export const sortNote = () => {
  return {
    type: actionTypes.SORT_NOTES,
  };
};

export const updateNote = (value) => {
  return {
    type: actionTypes.UPDATE_NOTE,
    value,
  };
};

export const deleteNote = (value) => {
  return {
    type: actionTypes.DELETE_NOTE,
    value,
  };
};
