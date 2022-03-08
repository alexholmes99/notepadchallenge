import * as actions from "../Actions/NoteActionTypes";

export const initialState = {
  value: [], //state array
  sorted: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_NOTE:
      const existingData = state.value;
      const dataArray = [...existingData];
      dataArray.push(action.value);
      return { ...state, value: dataArray };
    case actions.SORT_NOTE:
      const sortedVal = state.sorted;
      return { ...state, sorted: !sortedVal };
    case actions.UPDATE_NOTE:
      const newNote = action.newNote;
      return {
        ...state,
        value: state.value.map((note) =>
          note.id === newNote.id
            ? {
                ...note,
                name: newNote.name,
                date: newNote.date,
                note: newNote.note,
              }
            : note
        ),
      };
    case actions.DELETE_NOTE:
      const dNote = state.value.find((note) => note.id === action.id);
      const dIndex = state.value.indexOf(dNote);
      const newArray = [...state.value];
      newArray.splice(dIndex, 1);
      return {
        ...state,
        value: newArray,
      };
    default:
      return state;
  }
}
