import * as actions from "../Actions/NoteActionTypes";

export const initialState = {
  value: [], //state array
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_NOTE:
      return { ...state, value: action.value };
    default:
      return state;
  }
}
