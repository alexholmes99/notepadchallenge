import * as actionTypes from "./NoteActionTypes";

export const setNote = (values) => {
  return {
    type: actionTypes.SET_NOTE,
    values,
  };
};
