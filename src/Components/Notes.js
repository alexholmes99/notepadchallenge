import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortNote, deleteNote } from "../Redux/Actions/NoteAction";
import styled from "styled-components";
import Nav from "./Nav";
import Theme from "./Themes";

function Notes() {
  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });
  const sorted = useSelector((state) => {
    return state.noteReducer.sorted;
  });

  const dispatch = useDispatch();

  const sortNotes = (e) => {
    e.preventDefault();
    dispatch(sortNote());
  };
  const removeNote = (noteId) => {
    dispatch(deleteNote(noteId));
    alert("Note Deleted");
  };

  const noteMap = () => {
    let sortedData = [...notes];
    if (sorted) {
      sortedData = sortedData.sort((a, b) => (a.date > b.date ? 1 : -1));
    }
    return (
      <NoteContainer>
        {sortedData.map((n) => {
          return (
            <StickyNote key={n.id}>
              <EditNote>
                <Nav link={`/notes/update/${n.id}`}>Update</Nav>
                <Nav preventDefault link="" onClick={() => removeNote(n.id)}>
                  Delete
                </Nav>
              </EditNote>
              <NoteDate>{n.date}</NoteDate>
              <NoteName>{n.name}</NoteName>
              <NoteContent>{n.note}</NoteContent>
            </StickyNote>
          );
        })}
      </NoteContainer>
    );
  };

  return (
    <Theme>
      <Nav link="/notes/new">Add Note</Nav>
      {notes.length === 0 ? (
        <NoNotes> Notes will be displayed here </NoNotes>
      ) : (
        <Nav preventDefault link="" onClick={sortNotes}>
          {sorted ? "Undo" : "Sort Notes"}
        </Nav>
      )}

      {noteMap()}
    </Theme>
  );
}
const EditNote = styled.div`
  float: right;
`;

const NoteContainer = styled.div`
  margin-left: 15%;
`;
const StickyNote = styled.div`
  float: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #000;
  background: #ffc;
  display: block;
  height: 20em;
  width: 20em;
  margin: 20px;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transition: transform 0.15s linear;
  &:nth-child(even) {
    transform: rotate(4deg);
    position: relative;
    top: 5px;
    background: #cfc;
  }
  &:nth-child(3n) {
    transform: rotate(-5deg);
    position: relative;
    top: -5px;
    background: #ccf;
  }
  &:nth-child(5n) {
    transform: rotate(5deg);
    position: relative;
    top: -10px;
  }
  &:hover,
  &:focus {
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
    transform: scale(1.25);
    position: relative;
    z-index: 5;
  }
`;

const NoteName = styled.h1`
  font-weight: bold;
  font-family: ${(props) => props.theme.font.notePad};
  font-size: ${(props) => props.theme.fontSize.input};
  text-decoration: underline;
  text-align: center;
  margin: 0;
`;

const NoteDate = styled.h4`
  font-size: 16px;
  text-align: left;
  font-family: ${(props) => props.theme.font.notePad};
  padding-left: 5px;
  padding-bottom: 0;
  margin: 0;
`;

const NoteContent = styled.p`
  font-family: ${(props) => props.theme.font.notePad};
  font-size: 20px;
  margin: 0;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding-left: 1em;
  padding-right: 1em;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
`;

const NoNotes = styled.h1`
  font-size: 28px;
  font-family: ${(props) => props.theme.font.notePad};
  text-align: center;
`;

export default Notes;
