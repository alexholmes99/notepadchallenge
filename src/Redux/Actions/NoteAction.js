import * as actionTypes from "./NoteActionTypes";

export const setNote = (value) => {
  return {
    type: "SET_NOTE",
    value,
  };
};
