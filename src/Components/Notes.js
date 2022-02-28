import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Notes() {
  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });
  return (
    <div>
      {notes.map((n) => {
        return (
          <StickyNote>
            <h2>{n.name}</h2>
            <h4>{n.date}</h4>
            <h3>{n.note}</h3>
          </StickyNote>
        );
      })}
    </div>
  );
}

const StickyNote = styled.div`
  text-decoration: none;
  font-family: "Sue Ellen Francisco", cursive;
  color: #000;
  background: #ffc;
  display: block;
  height: 10em;
  width: 10em;
  padding: 1em;
`;
export default Notes;
