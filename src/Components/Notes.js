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
            <h3>{n.date}</h3>
            <p>{n.note}</p>
          </StickyNote>
        );
      })}
    </div>
  );
}

const StickyNote = styled.div`
  text-decoration: none;
  color: #000;
  background: #ffc;
  display: block;
  height: 10em;
  width: 10em;
  padding: 1em;
`;

const NoteCont = styled.div`
  // margin: 20px auto;
  // font-family: "Lato";
  // background: #666;
  // color: #fff;
`;
export default Notes;
