import * as actions from "../Actions/NoteActionTypes";

export const initialState = {
  value: [], //state array
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_NOTE:
      const newData = state.value;
      const dataArray = [...newData];
      dataArray.push(action.value);
      return { ...state, value: dataArray };
    default:
      return state;
  }
}
