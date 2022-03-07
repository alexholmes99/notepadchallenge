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
