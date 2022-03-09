import * as actions from "../Actions/NoteActionTypes";

export const initialState = {
  value: [], //state array
  sorted: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_NOTE:
      const existingData = state.value;
      const dataArray = [...existingData];
      dataArray.push(action.value);
      return { ...state, value: dataArray };
    case actions.SORT_NOTES:
      const sortedVal = state.sorted;
      return { ...state, sorted: !sortedVal };
    case actions.UPDATE_NOTE:
      const updatedNote = action.value;
      return {
        ...state,
        value: state.value.map((note) =>
          note.id === updatedNote.id
            ? {
                ...note,
                name: updatedNote.name,
                date: updatedNote.date,
                note: updatedNote.note,
              }
            : note
        ),
      };
    case actions.DELETE_NOTE:
      const deleteNote = state.value.find((note) => note.id === action.value);
      const deleteIndex = state.value.indexOf(deleteNote);
      const newArray = [...state.value];
      newArray.splice(deleteIndex, 1);
      return {
        ...state,
        value: newArray,
      };
    default:
      return state;
  }
}
