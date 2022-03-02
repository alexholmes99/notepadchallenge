import * as actions from "../Actions/NoteActionTypes";

export const initialState = {
  value: [], //state array
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_NOTE:
      let x = state.value;
      let dataArray = [...x];
      dataArray.push(action.value);
      return { ...state, value: dataArray };
    default:
      return state;
  }
}
